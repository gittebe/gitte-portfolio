import { Grid } from "../../ui/Grid/Grid"
import { FooterCard } from "../../components/FooterCard/FooterCard"
import { HeaderTwo } from "../../ui/Typography/Typography"
import "./FooterSection.css"

export const FooterSection = () => {
  return (
    <section className="footer-section">
      <HeaderTwo>Contact</HeaderTwo>
      <FooterCard />
    </section>
  )
}