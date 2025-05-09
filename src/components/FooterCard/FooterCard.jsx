import { HeaderTwo, Body } from "../../ui/Typography/Typography"
import { MediaLinkContainer } from "../MediaLinkContainer/MediaLinkContainer"
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
        <MediaLinkContainer />
      </div>
    </div>
  )
}