import { Link } from "react-router-dom";

function ArticleCard({article}) {

    return (
        <Link to={`/article/${article.id}`} className="block border rounded-md p-4 hover:shadow-md transition">
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p className="text-sm text-gray-500 mt-2">{article.summary}</p>
        </Link>
    );
}

export default ArticleCard;
