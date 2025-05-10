import { HeaderTwo, Body } from "../../ui/Typography/Typography"
import { MediaLinkContainer } from "../MediaLinkContainer/MediaLinkContainer";
import { ContactForm } from "../ContactForm/ContactForm";
import "./FooterCard.css"

export const FooterCard = () => {
  return (
    <div className="footer-card">
      <MediaLinkContainer />
      <ContactForm />
    </div>
  )
}