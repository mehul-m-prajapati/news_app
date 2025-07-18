import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
    const [newsData, setNewsData] = useState([]);
    const [search, setSearch] = useState("india");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

    const fetchNews = async (reset = false) => {
        try {
            setLoading(true);

            const resp = await axios.get(`https://newsapi.org/v2/everything`, {
                params: {
                    q: search,
                    page: page,
                    pageSize: 10,
                    apiKey: API_KEY
                }
            });

            const newArticles = resp.data.articles;

            setNewsData(prev => reset ? newArticles : [...prev, ...newArticles]);

        } catch (error) {
            setError("Failed to fetch news");

        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setNewsData([]); // clear old
        setPage(1);
        fetchNews(true);
    }, [search]);

    useEffect(() => {
        if (page > 1)
            fetchNews();
    }, [page]);

    const loadMore = () => {
        setPage(prev => prev + 1);
    }

    return (
        <NewsContext.Provider value={{ search, setSearch, newsData, setNewsData, loading, error, loadMore }}>
            {children}
        </NewsContext.Provider>
    );
}

export const useNews = () => useContext(NewsContext);
