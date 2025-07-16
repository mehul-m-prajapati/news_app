import { useParams } from 'react-router-dom';

function ArticleDetail() {

  const { id } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Article Detail - {id}</h1>
      <p>Full content for article {id} would be displayed here.</p>
    </div>
  );
}

export default ArticleDetail;
