import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ArticleDetail from './pages/ArticleDetail'
import Bookmarks from './pages/Bookmarks'
import SearchResults from "./pages/SearchResults"
import Settings from './pages/Settings'
import Category from "./pages/Category"
import {ThemeProvider} from "./contexts/theme"
import ThemeBtn from "./components/ThemeBtn"
import { useState, useEffect } from 'react'

function App() {
  const [themeMode, setThemeMode] = useState('dark');

  const lightTheme = () => {
    setThemeMode('light');
  }

  const darkTheme = () => {
    setThemeMode('dark');
  }

  //actual change in theme (UI)
  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
      <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <BrowserRouter>
      <ThemeBtn />
        <div className="min-h-screen flex flex-col bg-white text-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:text-white">
            <Header />
            <main className="flex-grow">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/article/:id' element={<ArticleDetail />} />
                    <Route path="/search" element={<SearchResults />} />
                    <Route path="/category/:categoryName" element={<Category />} />
                    <Route path="/bookmarks" element={<Bookmarks />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </main>
            <Footer />
        </div>
      </BrowserRouter>
      </ThemeProvider>
  )
}

export default App;
