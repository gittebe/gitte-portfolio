import PropTypes from 'prop-types'
import "./MediaLink.css"

export const MediaLink = ({ src, alt, link, aria }) => {
  return (
    <a href={link} className="media-link" target="_blank" rel="noopener noreferrer" aria-label={aria}>
      <img className="media-link-img" src={src} alt={alt} />
    </a>
  )
}

MediaLink.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  aria: PropTypes.string,
  link: PropTypes.string,
}
