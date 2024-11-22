import { MediaButton } from "../../ui/MediaButton/MediaButton"
import BtnGithub from "../../assets/BtnGithub.svg"
import BtnLinkedin from "../../assets/BtnLinkedin.svg"
import "./MediaButtonContainer.css"

export const MediaButtonContainer = () => {
  return (
    <div className="media-button-container">
      <MediaButton
        src={BtnLinkedin}
        alt="LinkedIn Button"
        link="https://www.linkedin.com/in/gittebeckmann/">
      </MediaButton>
      <MediaButton
        src={BtnGithub}
        alt="GitHub Button"
        link="https://github.com/gittebe">
      </MediaButton>
    </div>
  )
}