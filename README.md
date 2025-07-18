# 📰 News App
A responsive and modern news application built with **React**, **Tailwind CSS**, and the [NewsAPI](https://newsapi.org/). It allows users to:

- 🔍 Search for real-time news by keyword
- 🗂️ Browse news by categories (e.g. Politics, Sports, Health)
- 🌙 Toggle between light and dark mode
- 📑 View detailed articles in a new tab

---

## 🚀 Features

- ✅ Search bar for real-time news queries
- ✅ Category-based news filtering
- ✅ Tailwind CSS for clean and responsive UI
- ✅ React Router for page navigation
- ✅ Context API for theme and news state management

---

## 🛠️ Tech Stack

| Tech        | Description                          |
|-------------|--------------------------------------|
| React       | JavaScript UI library                |
| Tailwind CSS| Utility-first CSS framework          |
| Axios       | Promise-based HTTP client            |
| React Router| Declarative routing for React        |
| Context API | Global state management              |
| Vite        | Fast frontend tooling (optional)     |

---

## 🔐 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/mehul-m-prajapati/news_app.git
cd news_app

npm install

Create a .env file in the root directory and add your API key:
VITE_NEWS_API_KEY=your_newsapi_key_here

npm run dev
```

## 🧩 Folder Structure
```
src/
├── components/        # Reusable components (Header, Footer, Card)
├── contexts/          # ThemeContext, NewsContext
├── pages/             # Page-level components (Home, Category)
├── App.jsx            # Root component
├── main.jsx           # Entry point
├── assets/            # Images & logos
```

## 🧪 Future Enhancements
```
🔖 Bookmark articles with local storage or Firebase
📱 Mobile-first responsiveness improvements
🌐 International news by country toggle
💬 Add toast notifications for errors
🗂️ Paginate news results
```
