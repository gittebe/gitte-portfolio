import PropTypes from 'prop-types'
import "./CardImage.css"

export const CardImage = ({ cardImage, alt }) => {
  return (
    <div className="card-image-container">
      <img src={cardImage} alt={alt} className="card-image" />
    </div>
  )
}
CardImage.propTypes = {
  alt: PropTypes.string,
  cardImage: PropTypes.string
}