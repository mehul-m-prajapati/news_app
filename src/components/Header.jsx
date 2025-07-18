import {Link} from "react-router-dom"
import ThemeBtn from "./ThemeBtn"
import { useEffect, useContext, useState } from "react"
import axios from "axios"
import { useNews } from "../contexts/NewsContext"

function Header() {
    const { setSearch } = useNews();
    const [searchBox, setSearchBox] = useState("");

    const getData = async() =>{
        setSearch(searchBox);
    }

    const handleInputChange = (e) =>{
        setSearchBox(e.target.value);
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
                    value={searchBox}
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
        </>
    );
}


export default Header;
