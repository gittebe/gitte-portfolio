import PropTypes from 'prop-types'
import "./Grid.css"

export const Grid = ({ children, background }) => {
  return (
    <section className={`grid-section ${background}-background`}>
      {children}
    </section>
  )
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string.isRequired,
}
