import { Link } from "react-router-dom";
import { Body, HeaderThree } from "../../ui/Typography/Typography";
import { CardImage } from "../../ui/CardImage/CardImage";
import "./JourneyCard.css";
import PropTypes from 'prop-types';

const truncateText = (text, length) => {
  const tempText = text.replace(/<\/?[^>]+(>|$)/g, "");
  return tempText.length <= length ? tempText : tempText.slice(0, length) + "...";
};

export const JourneyCard = ({ journey, index }) => {
  if (!journey) {
    return <div className="journey-card">No journey data available.</div>;
  }

  return (
    <div className="journey-card">
      <CardImage cardImage={journey.cardImage} alt={journey.alt} />

      <div className="journey-title">
        <HeaderThree>{journey.header}</HeaderThree>
      </div>

      <div className="journey-description">
        <Body>{truncateText(journey.article, 100)}</Body>
      </div>

      <Link
        to={`/journey/${index}`}
        className="journey-link"
      >
          Read Article
      </Link>
    </div>
  );
};

JourneyCard.propTypes = {
  journey: PropTypes.shape({
    cardImage: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    article: PropTypes.string.isRequired,
  }),
  index: PropTypes.number.isRequired,
};
