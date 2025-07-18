import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Category from "./pages/Category"
import {ThemeProvider} from "./contexts/theme"
import { useState, useEffect } from 'react'

function App() {
  const [themeMode, setThemeMode] = useState('dark');
  const [newsData, setNewsData] = useState(null);
  const [search, setSearch] = useState("india");

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
            <div className="min-h-screen flex flex-col bg-white text-black border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 dark:text-white">
                <Header setNewsData={setNewsData} search={search} setSearch={setSearch} />
                <main className="flex-grow">
                    <Routes>
                        <Route path='/' element={<Home newsData={newsData} setSearch={setSearch} />} />
                        <Route path="/category/:categoryName" element={<Category />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
      </ThemeProvider>
  )
}

export default App;
