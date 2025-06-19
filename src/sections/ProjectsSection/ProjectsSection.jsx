import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { HeaderTwo } from "../../ui/Typography/Typography";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import "./ProjectsSection.css";

export const ProjectsSection = () => {
   const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      document.title = "Projects - Portfolio Gitte";
    }
  }, [inView]);

  return (
    <section ref={ref} className="projects-section" id="projects">
      <HeaderTwo>Featured Projects</HeaderTwo>
      <div className="projects-grid-container">
        <ProjectCard />
      </div>
    </section>
  );
};