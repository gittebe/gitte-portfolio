import { HeaderTwo } from "../../ui/Typography/Typography";
import "./SkillsSection.css"

export const SkillsSection = () => {
  return (
    <section className="skills-section" id="skills">
      <HeaderTwo>Skills</HeaderTwo>
      <article className="skills">
        <div>
          <img src="../assets/logo-accessibility.png" alt=""></img>
          <p>Accessibility</p>
        </div>
        <div>
          <img src="/assets/logo-github.png" alt=""></img>
          <p>gitHub</p>
        </div>
        <div>
          <img src="/assets/logo-html.png" alt=""></img>
          <p>HTML</p>
        </div>
        <div>
          <img src="/assets/logo-css.png" alt=""></img>
          <p>CSS</p>
        </div>
        <div>
          <img src="/assets/logo-java-script.png" alt=""></img>
          <p>JavaScript</p>
        </div>
        <div>
          <img src="/assets/logo-java.png" alt=""></img>
          <p>Java</p>
        </div>
         <div>
          <img src="/assets/logo-react.png" alt=""></img>
          <p>React</p>
        </div>
         <div>
          <img src="/assets/logo-express.png" alt=""></img>
          <p>Express.js</p>
        </div>
        <div>
          <img src="/assets/logo-mongodb.png" alt=""></img>
          <p>MongoDB</p>
        </div>
        <div>
          <img src="/assets/logo-responsive.png" alt=""></img>
          <p>Responsive</p>
        </div>
        <div>
          <img src="/assets/logo-node.png" alt=""></img>
          <p>Node.js</p>
        </div>
        <div>
          <img src="/assets/logo-sql.png" alt=""></img>
          <p>SQL</p>
        </div>
        <div>
          <img src="/assets/logo-figma.png" alt=""></img>
          <p>Figma</p>
        </div>
      </article>
    </section>
  )
}