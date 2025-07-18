
const Card = ({ data }) => {

  const readMore = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">

      {data.map((curItem, index) => {

        if (!curItem.urlToImage)
            return null;

        return (
          <div key={index} className="max-w-sm rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">

            <img src={curItem.urlToImage} alt={curItem.title} className="w-full h-48 object-cover" />

            <div className="p-4 flex flex-col space-y-2 h-full">
                <a href={curItem.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                    {curItem.title}
                </a>
                <p className="text-sm line-clamp-3">
                    {curItem.description}
                </p>
                <button
                    onClick={() => readMore(curItem.url)}
                    className="bg-blue-600 py-2 text-white cursor-pointer rounded hover:bg-blue-700 transition-colors"
                >Read More
                </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
