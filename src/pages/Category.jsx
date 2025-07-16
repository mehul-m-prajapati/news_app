import { useParams } from 'react-router-dom';

function Category() {

  const { categoryName } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold capitalize">{categoryName} News</h1>
      <p>Articles under {categoryName} category go here.</p>
    </div>
  );
}

export default Category;
