import { Grid } from "../../ui/Grid/Grid"
import { FooterCard } from "../../components/FooterCard/FooterCard"
import "./FooterSection.css"

export const FooterSection = () => {
  return (
    <Grid background="neutral">
      <section className="footer-section">
        <div className="footer-card-container">
          <FooterCard />
        </div>
      </section>
    </Grid>
  )
}