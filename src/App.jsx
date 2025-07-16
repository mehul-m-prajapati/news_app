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

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
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
    </>
  )
}

export default App;
