import { useState, useEffect } from "react";
import axios from "axios";

export interface NewsArticleType {
    id: string;
    title: string;
    image: string;
    category: string;
    date: string;
    comments: number;
    description: string;
    url: string;
}

const useNews = () => {
    const [news, setNews] = useState<NewsArticleType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            try {
                const url = `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/news/all`;
                const response = await axios.get(url);
                if (response.data && response.data.articles) {
                    const formatted = response.data.articles
                        .filter((art: any) => art.title && art.urlToImage && art.title !== "[Removed]")
                        .map((art: any, index: number) => {
                            // Convert standard ISO date to a more friendly format
                            const pubDate = new Date(art.publishedAt);

                            return {
                                id: art.url + index,
                                title: art.title,
                                image: art.urlToImage,
                                category: art.source?.name || "Global News",
                                date: pubDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }),
                                comments: Math.floor(Math.random() * 200) + 10,
                                description: art.description || "",
                                url: art.url
                            };
                        });
                    setNews(formatted);
                }
            } catch (err: any) {
                console.error("Error fetching news:", err);
                setError(err.message || "Failed to fetch news.");
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    return { news, loading, error };
};

export default useNews;
