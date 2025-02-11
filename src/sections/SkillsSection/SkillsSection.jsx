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
            header="Languages"
            body={["HTML5", "CSS3", "JavaScript", "TypeScript", "Java"]} />
          <SkillsCard
            header="Tech"
            body={["React", "Global State Management", "DOM Manipulation", "Responsive Design", "Styled Components", "Zustand", "Node.js", "Express.js", "MongoDB", "Mongoose"]} />
          <SkillsCard
            header="Dev Tools"
            body={["Command Line (terminal)", "Git", "Github", "VS Code", "Chrome dev tools", "Postman"]} />
          <SkillsCard
            header="More"
            body={["Project Management", "Qualitative Research", "German", "English", "Swedish"]} />
        </div>
      </section>
    </Grid>
  )
}