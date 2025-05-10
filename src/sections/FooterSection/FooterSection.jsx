import { Grid } from "../../ui/Grid/Grid"
import { FooterCard } from "../../components/FooterCard/FooterCard"
import "./FooterSection.css"
import { ContactForm } from "../../components/ContactForm/ContactForm"

export const FooterSection = () => {
  return (
    <Grid background="neutral">
      <section className="footer-section">
        <div className="footer-card-container">
          <FooterCard />
          <ContactForm/>
        </div>
      </section>
    </Grid>
  )
}