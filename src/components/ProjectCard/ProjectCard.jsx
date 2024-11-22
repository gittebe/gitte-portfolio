import { useState, useEffect } from "react"
import { CardImage } from "../../ui/CardImage/CardImage"
import { ProjectButton } from "../../ui/ProjectButton/ProjectButton"
import { HeaderThree } from "../../ui/Typography/Typography"
import "./ProjectCard.css"
import projectData from "../../../src/projects.json"

export const ProjectCard = () => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    setProjects(projectData)
    console.log(projectData)
  }, [])

  return (
    <>
      {projects.map((project, index) => (
        <div key={index} className="project-card" >
          <CardImage cardImage={project.cardImage} alt={project.alt} />
          <div className="project-title">
            <HeaderThree>{project.header}</HeaderThree>
          </div>
          <div className="button-container">
            <ProjectButton
              label="Live demo"
              background="primary"
              onClick={() => window.open(project.liveDemo, "_blank")}
            >
            </ProjectButton>
            <ProjectButton
              label="View Code"
              background="neutral"
              onClick={() => window.open(project.viewCode, "_blank")}
            >
            </ProjectButton>
          </div>
        </div>
      ))}
    </>
  )
}