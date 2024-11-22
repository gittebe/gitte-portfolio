import PropTypes from "prop-types"
import { HeaderThree } from "../../ui/Typography/Typography"
import { Body } from "../../ui/Typography/Typography"
import "./SkillsCard.css"

export const SkillsCard = ({ header, body }) => {
  return (
    <div className="skills-card">
      <div className="skills-box">
        <HeaderThree>{header}</HeaderThree>
        <ul className="skills-list">
          {body.map((body, index) => (
            <li className="list-item" key={index} >
              <Body>{body}</Body>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

SkillsCard.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.arrayOf(PropTypes.string).isRequired,
}