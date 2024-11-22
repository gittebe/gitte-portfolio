import { Grid } from "../../ui/Grid/Grid"
import { FooterCard } from "../../components/FooterCard/FooterCard"
import { FooterImage } from "../../ui/FooterImage/FooterImage"
import "./FooterSection.css"

export const FooterSection = () => {
  return (
    <Grid background="neutral">
      <section className="footer-section">
        <div className="footer-image-container">
          <FooterImage />
        </div>
        <div className="footer-card-container">
          <FooterCard />
        </div>
      </section>
    </Grid>
  )
}