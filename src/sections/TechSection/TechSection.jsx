import { HeaderTwo } from "../../ui/Typography/Typography"
import { Body } from "../../ui/Typography/Typography"
import { Grid } from "../../ui/Grid/Grid"
import "./TechSection.css"

export const TechSection = () => {
  return (
    <>
      <Grid background="neutral">
        <section className="tech-section">
          <HeaderTwo>Tech</HeaderTwo>
          <div className="tech-body-container">
            <Body>
              HTML, CSS, Flexbox, JavaScript, React, ReactHooks, Node.js, Web Accessibility, APIs, mob-programming, pair-programming, GitHub.
            </Body>
          </div>
        </section>
      </Grid>
    </>
  )
}