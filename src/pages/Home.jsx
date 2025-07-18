import Card from "../components/Card"
import { useNews } from "../contexts/NewsContext";

function Home() {
    const { newsData, loading, error, loadMore, setSearch } = useNews();

    const userInput = (event) =>{
        setSearch(event.target.value);
    }

    return (
        <>
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

        {/* News Cards */}
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Latest News</h1>

            {error && <p className="text-red-500">{error}</p>}

            <Card data={newsData} />

            {loading && (
                <div className="flex justify-center my-4">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            )}

            {!loading && (
                <div className="flex justify-center mt-4">
                    <button onClick={loadMore} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                        Load More
                    </button>
                </div>
            )}
        </div>
        </>
    );
}


export default Home;
