import { HeaderTwo } from "../../ui/Typography/Typography";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import "./ProjectsSection.css"

export const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <HeaderTwo>
        Featured Projects
      </HeaderTwo>
      <div className="projects-scroll-container">
        <ProjectCard></ProjectCard>
      </div>
    </section>

  )
}

