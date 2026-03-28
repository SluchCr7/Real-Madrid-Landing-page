const axios = require('axios');
const asyncHandler = require('express-async-handler');

// Simple in-memory cache to prevent exceeding API limits (1 hour duration)
let newsCache = {
    data: null,
    lastFetched: null,
};

const CACHE_DURATION_MS = 60 * 60 * 1000;

const getNews = asyncHandler(async (req, res) => {
    try {
        const now = Date.now();

        // Serve cached version if it's fresh
        if (newsCache.data && newsCache.lastFetched && (now - newsCache.lastFetched < CACHE_DURATION_MS)) {
            return res.json(newsCache.data);
        }

        const response = await axios.get(`https://newsapi.org/v2/everything?q=real%20madrid&sortBy=publishedAt&language=en&apiKey=${process.env.NEWS_API_TOKEN}`);

        // Save to cache
        newsCache.data = response.data;
        newsCache.lastFetched = now;

        res.json(response.data);
    } catch (error) {
        // Fallback to cache if API errors out (e.g. rate limit hit)
        if (newsCache.data) {
            console.warn("API request failed, serving stale cache instead.");
            return res.json(newsCache.data);
        }
        console.error("Error fetching news:", error.response?.data || error.message);
        res.status(error.response?.status || 500);
        throw new Error(error.response?.data?.message || 'Failed to fetch news from API');
    }
});

module.exports = { getNews };