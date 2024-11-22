import { SkillsCard } from "../../components/SkillsCard/SkillsCard";
import { Grid } from "../../ui/Grid/Grid";
import { HeaderTwo } from "../../ui/Typography/Typography";
import "./SkillsSection.css"

export const SkillsSection = () => {
  return (
    <Grid background="neutral">
      <section className="skills-section">
        <HeaderTwo>
          Skills
        </HeaderTwo>
        <div className="spacer-one"></div>
        <div className="skills-container">
          <SkillsCard
            header="Code"
            body={["HTML5", "CSS3", "JavaScrip", "React", "GitHub"]} />
          <SkillsCard
            header="Toolbox"
            body={["Postman", "Figma", "Slack"]} />
          <SkillsCard
            header="Upcoming"
            body={["Node.js"]} />
          <SkillsCard
            header="More"
            body={["Concept", "Development"]} />
        </div>
      </section>
    </Grid>
  )
}