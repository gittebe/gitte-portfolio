import { useState, useRef } from "react";
import { HeaderTwo } from "../../ui/Typography/Typography";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import "./ProjectsSection.css"
import Slider from "react-slick";
import { ScrollButtonLeft } from "../../ui/ScrollButtonLeft/ScrollButtonLeft";
import { ScrollButtonRight } from "../../ui/ScrollButtonRight/ScrollButtonRight";

export const ProjectsSection = () => {
  // const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      containerRef.current.scrollBy({left: scrollAmount, behavior: "smooth"})
    }
  }
  const settings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="projects-section"
    id="projects">
      <HeaderTwo>
        Featured Projects
      </HeaderTwo>
      <div className="project-section-container">
        <ScrollButtonLeft scroll={scroll}/>
        <div className="projects-scroll-container" ref={containerRef}>
          <ProjectCard></ProjectCard>
        </div>
        <ScrollButtonRight scroll={scroll}/>
      </div>

      <div className="projects-scroll-container-mobile">
          <Slider {...settings}>
            <ProjectCard></ProjectCard>
          </Slider>
      </div>
    </section>
  )
}