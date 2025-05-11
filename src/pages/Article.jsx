import { useParams } from 'react-router-dom';

export const Article = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Full Article {id}</h1>
      {/* Full article content here */}
    </div>
  );
};