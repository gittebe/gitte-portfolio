import { HeaderTwo } from "../../ui/Typography/Typography";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import "./ProjectsSection.css";

export const ProjectsSection = () => {
  return (
    <section className="projects-section" id="projects">
      <HeaderTwo>Featured Projects</HeaderTwo>
      <div className="projects-grid-container">
        <ProjectCard />
      </div>
    </section>
  );
};
