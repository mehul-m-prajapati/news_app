import Card from "../components/Card"

function Home({newsData, setSearch}) {
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
        {newsData ? <Card data={newsData} /> : <p>Loading...</p>}
        </>
    );
}


export default Home;
