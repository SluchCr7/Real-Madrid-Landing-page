const asyncHandler = require('express-async-handler');
const axios = require('axios');

// Configure your axios defaults
const footballApi = axios.create({
    baseURL: 'https://api.football-data.org/v4',
    headers: {
        'X-Auth-Token': process.env.FOOTBALL_API_TOKEN || '',
    },
});

// Simple in-memory cache to prevent exceeding API limits
const cache = {
    standings: {
        CL: { data: null, timestamp: null },
        PD: { data: null, timestamp: null },
    }
};
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes
// @desc    Get Matches from Football Data API
// @route   GET /api/football/matches
// @access  Public (or Private depending on your needs)
const getMatches = asyncHandler(async (req, res) => {
    try {
        const response = await footballApi.get('/teams/86/matches');
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching matches:", error.response?.data || error.message);
        res.status(error.response?.status || 500);
        throw new Error(error.response?.data?.message || 'Failed to fetch matches from API');
    }
});

// @desc    Get Team from Football Data API
// @route   GET /api/football/team
// @access  Public
const getTeam = asyncHandler(async (req, res) => {
    try {
        const response = await footballApi.get('/teams/86');
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching team:", error.response?.data || error.message);
        res.status(error.response?.status || 500);
        throw new Error(error.response?.data?.message || 'Failed to fetch team from API');
    }
});

// @desc    Get Standings from Football Data API
// @route   GET /api/football/standings/:competition
// @access  Public
const getStandings = asyncHandler(async (req, res) => {
    const { competition } = req.params;
    
    // Validate competition
    if (competition !== 'CL' && competition !== 'PD') {
        res.status(400);
        throw new Error('Invalid competition code. Must be "CL" or "PD".');
    }

    const now = Date.now();
    const cachedEntry = cache.standings[competition];

    // Check if cache is valid (exists and isn't expired)
    if (cachedEntry.data && cachedEntry.timestamp && (now - cachedEntry.timestamp < CACHE_DURATION)) {
        return res.json(cachedEntry.data);
    }

    try {
        const response = await footballApi.get(`/competitions/${competition}/standings`);
        
        // Update cache
        cache.standings[competition] = {
            data: response.data,
            timestamp: now
        };

        res.json(response.data);
    } catch (error) {
        console.error(`Error fetching standings for ${competition}:`, error.response?.data || error.message);
        
        // Fallback to stale cache if API fails (e.g., rate limit)
        if (cachedEntry.data) {
             console.log(`Falling back to stale cache for ${competition}`);
             return res.json(cachedEntry.data);
        }

        res.status(error.response?.status || 500);
        throw new Error(error.response?.data?.message || 'Failed to fetch standings from API');
    }
});

module.exports = {
    getMatches,
    getTeam,
    getStandings
};
