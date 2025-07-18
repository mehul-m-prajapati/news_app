import { createContext, useState } from "react";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {

    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null);

    return (
        <NewsContext.Provider value={{ search, setSearch, newsData, setNewsData }}>
            {children}
        </NewsContext.Provider>
    );
}
