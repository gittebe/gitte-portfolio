import { Link } from "react-router-dom";
import { ProjectButton } from "../../ui/ProjectButton/ProjectButton";
import { Body, HeaderThree } from "../../ui/Typography/Typography";
import { CardImage } from "../../ui/CardImage/CardImage";
import journeyData from "../../../src/journey.json";
import "./JourneyCard.css";
import { useNavigate } from "react-router-dom";


// Utility function to truncate text
const truncateText = (text, length) => {
  const tempText = text.replace(/<\/?[^>]+(>|$)/g, "");
  return tempText.length <= length ? tempText : tempText.slice(0, length) + "...";
};



export const JourneyCard = ({ journey, index }) => {
  if (!journey) {
    return <div className="journey-card">No journey data available.</div>;
  }
  const navigate = useNavigate();
  return (
    <div className="journey-card">
      <CardImage cardImage={journey.cardImage} alt={journey.alt} />

      <div className="journey-title">
        <HeaderThree>{journey.header}</HeaderThree>
      </div>

      <div className="journey-description">
        <Body>{truncateText(journey.article, 100)}</Body>
      </div>

      <div className="button-container">
        <ProjectButton
          label="Read Article"
          background="primary"
          onClick={() => navigate(`/journey/${index}`)}
        />
      </div>
    </div>
  );
};
