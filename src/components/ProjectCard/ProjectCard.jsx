import { useState, useEffect } from "react"
import { CardImage } from "../../ui/CardImage/CardImage"
import { LinkBox } from "../../ui/LinkBox/LinkBox"
import { HeaderThree, Body } from "../../ui/Typography/Typography"
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
          <div className="project-description-container">
            <Body>{project.description}</Body>
          </div>
          <div className="linkbox-wrapper">
            <LinkBox
              links={[
                { href: project.liveDemo, label: "Live demo", background: "primary" },
                { href: project.viewCode, label: "View Code", background: "neutral" }
              ]}
            />
          </div>
        </div>
      ))}
    </>
  )
}