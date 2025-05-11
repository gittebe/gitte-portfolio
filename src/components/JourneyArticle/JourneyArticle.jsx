import { useParams } from "react-router-dom";
import journeyData from "../../journey.json";

const parseArticle = (article) => {
  const paragraphs = article.split("</p>");
  return paragraphs.map((paragraph, index) => {
    if (paragraph.trim()) {
      return <p key={index}>{paragraph.replace(/<p>/g, "").trim()}</p>;
    }
    return null;
  });
};

export const JourneyArticle = () => {
  const { id } = useParams();
  if (!id) {
    return <p>Invalid article ID.</p>;
  }

  const index = parseInt(id, 10);
  if (isNaN(index)) {
    return <p>Invalid article ID.</p>;
  }

  const journey = journeyData[index];

  if (!journey) {
    return <p>Sorry, article not found.</p>;
  }

  return (
    <div className="journey-article">
      <h1>{journey.header}</h1>
      <img src={journey.cardImage} alt={journey.alt} />
      <div>{parseArticle(journey.article)}</div>
    </div>
  );
};