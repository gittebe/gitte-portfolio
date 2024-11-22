import { useState, useEffect } from "react"
import { ProjectButton } from "../../ui/ProjectButton/ProjectButton"
import { HeaderThree } from "../../ui/Typography/Typography"
import { CardImage } from "../../ui/CardImage/CardImage"
import journeyData from "../../../src/journey.json"
import "./JourneyCard.css"

export const JourneyCard = () => {
  const [journey, setJourney] = useState([])
  useEffect(() => {
    setJourney(journeyData)
  }, [])

  return (
    <>
      {journey.map((journey, index) => (
        <div key={index} className="journey-card" >
          <CardImage cardImage={journey.cardImage} alt={journey.alt} />
          <div className="journey-title">
            <HeaderThree>{journey.header}</HeaderThree>
          </div>
          <div className="button-container">
            <ProjectButton label="Read Article" background="neutral"></ProjectButton>
          </div>
        </div>
      ))}
    </>
  )
}