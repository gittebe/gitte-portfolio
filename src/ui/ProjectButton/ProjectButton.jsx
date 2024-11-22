import PropTypes from "prop-types"
import { Body } from "../Typography/Typography"
import "./ProjectButton.css"

export const ProjectButton = ({ label, background, onClick }) => {
  return (
    <button className={`project-button ${background}-background`}
      onClick={onClick}
    >
      <Body>
        {label}
      </Body>
    </button>
  )
}

ProjectButton.propTypes = {
  label: PropTypes.node.isRequired,
  background: PropTypes.oneOf(["primary", "secondary", "neutral"]).isRequired,
  onClick: PropTypes.func
}