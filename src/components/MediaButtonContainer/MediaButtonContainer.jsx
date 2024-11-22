import { MediaButton } from "../../ui/MediaButton/MediaButton"
import BtnGithub from "../../assets/BtnGithub.svg"
import BtnInstagram from "../../assets/BtnInstagram.svg"
import BtnLinkedin from "../../assets/BtnLinkedin.svg"
import BtnStackoverflow from "../../assets/BtnStackoverflow.svg"
import BtnTwitter from "../../assets/BtnTwitter.svg"
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
      <MediaButton
        src={BtnStackoverflow}
        alt="Stackoverflow Button">
      </MediaButton>
      <MediaButton
        src={BtnTwitter}
        alt="Twitter Button">
      </MediaButton>
      <MediaButton
        src={BtnInstagram}
        alt="Instagram Button">
      </MediaButton>
    </div>
  )
}