import { useParams } from "react-router-dom";
import journeyData from "../journey.json";
import { Link } from "react-router-dom";
import "./Article.css"

export const Article = () => {
  const { id } = useParams();
  const article = journeyData[parseInt(id, 10)];

  if (!article) {
    return <p>Article not found.</p>;
  }

  const formatArticle = (text) => {
    return text.split("<br />").map((line, index) => (
      <p key={index}>{line.trim()}</p>
    ));
  };
  return (
    <div className="article-wrapper">
      <header className="article-header">
        <Link to={"/"} className="link-back-to-home" aria-label="Back to Home">
          <img src="/assets/arrow-left.png" alt="" className="arrow" />
          <span>Back to Home</span>
        </Link>
      </header>
      <main>
        <div className="article-container">
          <h1>{article.header}</h1>
          <img src={article.cardImage.replace("./", "/")} alt={article.alt} />
          <div className="article-text">
            {formatArticle(article.article)}
          </div>
        </div>
      </main>
    </div>
  );
};