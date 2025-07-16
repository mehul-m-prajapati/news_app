import {Link} from "react-router-dom"


function Header() {
    return (
        <header className="bg-white shadow-md px-4 py-2 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">News Hub</Link>
            <nav className="space-x-4">
                <Link to="/bookmarks">Bookmarks</Link>
                <Link to="/settings">Settings</Link>
            </nav>
        </header>
    );
}


export default Header;
