import { useState, useEffect } from "react"
import { ProjectButton } from "../../ui/ProjectButton/ProjectButton"
import { Body, HeaderThree } from "../../ui/Typography/Typography"
import { CardImage } from "../../ui/CardImage/CardImage"
import journeyData from "../../../src/journey.json"
import "./JourneyCard.css"

export const JourneyCard = () => {
  const [journey, setJourney] = useState([])
  const [expanded, setExpanded] = useState({})
  useEffect(() => {
    setJourney(journeyData)
  }, [])

  const handleExpand = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index]
    }))
  }
  const truncateText = (text, length) => {
    if (text.length <= length) return text;
    return text.slice(0, length) + "...";
  };

  return (
    <>
      {journey.map((journey, index) => (
        <div key={index} className="journey-card" >
          <CardImage cardImage={journey.cardImage} alt={journey.alt} />
          <div className="journey-title">
            <HeaderThree>{journey.header}</HeaderThree>
          </div>
          <div className="journey-description">
            {expanded[index] ? (
            <Body>{journey.article}</Body>
            ) : (
            <Body>{truncateText(journey.article, 100)}</Body>
            )}
          </div>
          <div className="button-container">
            <ProjectButton label={expanded[index] ? "Show Less" : "Read Article"}
              background="neutral"
              onClick={() => handleExpand(index)}></ProjectButton>
          </div>
        </div>
      ))}
    </>
  )
}