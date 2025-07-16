import ArticleCard from "../components/ArticleCard";

const dummyArticles = [
  { id: '1', title: 'Breaking News One', summary: 'Summary of article one...' },
  { id: '2', title: 'Latest World News', summary: 'Summary of article two...' },
];

function Home() {

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Latest News</h1>
            <div className="grid gap-4">
                {dummyArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>
        </div>
    );
}


export default Home;
