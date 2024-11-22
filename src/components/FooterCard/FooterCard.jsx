import { HeaderTwo, Body } from "../../ui/Typography/Typography"
import { MediaButtonContainer } from "../MediaButtonContainer/MediaButtonContainer"
import "./FooterCard.css"

export const FooterCard = () => {
  return (
    <div className="footer-card">
      <div className="footer-text-container">
        <HeaderTwo>
          Contact
        </HeaderTwo>
        <div className="spacer"></div>
        <Body>Gitte Beckmann</Body>
        <Body> gittebeckmann@hotmail.com</Body>
      </div>
      <div className="media-button-div">
        <MediaButtonContainer />
      </div>
    </div>
  )
}