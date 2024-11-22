import PropTypes from 'prop-types'
import "./MediaButton.css"

export const MediaButton = ({ src, alt, link }) => {
  return (
    <a href={link} className="media-button" target="_blank" rel="noopener noreferrer">
      <img src={src} alt={alt} />
    </a>
  )
}

MediaButton.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  link: PropTypes.string,
}
