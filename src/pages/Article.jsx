import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import journeyData from "../journey.json";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./Article.css";

export const Article = () => {
  const { id } = useParams();
  const article = journeyData[parseInt(id, 10)];

  const headingRef = useRef(null);
  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

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
      <Helmet>
        <title>{article.header} – Gittes Journey</title>
        <meta name="description" content={`Article: ${article.header}`} />
      </Helmet>
      <header className="article-header">
        <Link to={"/"} className="link-back-to-home" aria-label="Back to Home">
          <span>Back to Home</span>
        </Link>
      </header>
      <main aria-label="Article Content">
        <div className="article-container">
          <h1
            ref={headingRef}
            tabIndex="-1"
          >{article.header}</h1>
          <img src={article.cardImage.replace("./", "/")} alt={article.alt} />
          {article.audio && (
            <div className="article-audio">
              <audio controls aria-label="Audio version of the article 'Rethinking Disability and Technology'">
                <source src={article.audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}

          <p className="article-text">
            {formatArticle(article.article)}
          </p>
        </div>
      </main>
    </div>
  );
};