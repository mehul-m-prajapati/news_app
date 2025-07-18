import {Link} from "react-router-dom"
import ThemeBtn from "./ThemeBtn"
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function Header() {

    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null);
    const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

    const getData = async() =>{

        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
            let dt = response.data.articles.slice(0,10)
            setNewsData(dt)
        } catch (error) {
            console.log("Axios error:", error.message);
        }
    }

    useEffect(()=>{
        getData()
    },[]);

    const userInput = (event) =>{
        setSearch(event.target.value);
    }

    const handleInputChange = (e) =>{
        setSearch(e.target.value);
    }

    return (
        <>
        {/* Nav bar and title */}
        <header className="shadow-md px-4 py-2 flex justify-between items-center border border-gray-200">
            <Link to="/" className="text-2xl font-bold">News Hub</Link>

            {/*
            <nav className="space-x-4">
                <Link to="/bookmarks">Bookmarks</Link>
                <Link to="/settings">Settings</Link>
            </nav> */}

            <div className="flex items-center space-x-2 rounded shadow-md w-full max-w-md">
                <input
                    onChange={handleInputChange}
                    value={search}
                    type="text"
                    placeholder="Search News"
                    className="flex-grow px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button onClick={getData} className="bg-blue-600 px-4 text-white py-2 hover:bg-blue-700 transition cursor-pointer rounded-lg">
                    Search
                </button>
                <ThemeBtn />
            </div>
        </header>

        {/* Search Category */}
        <div className="flex justify-center flex-wrap gap-4 p-4 rounded-lg">
            <button
                onClick={userInput}
                value="sports"
                className="px-5 py-2 bg-indigo-700 text-white rounded-lg shadow hover:bg-indigo-900 transition duration-200"
            >
                Sports
            </button>
            <button
                onClick={userInput}
                value="politics"
                className="px-5 py-2 bg-red-700 text-white rounded-lg shadow hover:bg-red-900 transition duration-200"
            >
                Politics
            </button>
            <button
                onClick={userInput}
                value="entertainment"
                className="px-5 py-2 bg-purple-700 text-white rounded-lg shadow hover:bg-purple-900 transition duration-200"
            >
                Entertainment
            </button>
            <button
                onClick={userInput}
                value="health"
                className="px-5 py-2 bg-green-700 text-white rounded-lg shadow hover:bg-green-900 transition duration-200"
            >
                Health
            </button>
            <button
                onClick={userInput}
                value="fitness"
                className="px-5 py-2 bg-yellow-700 text-white rounded-lg shadow hover:bg-yellow-900 transition duration-200"
            >
                Fitness
            </button>
        </div>

        {/* Actual News */}

        <div>
            {newsData ? <Card data={newsData}/> : null}
        </div>
        </>
    );
}


export default Header;
