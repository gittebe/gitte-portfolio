import { HeaderOne, HeaderThree, Body } from "../../ui/Typography/Typography"
import { MediaButtonContainer } from "../MediaButtonContainer/MediaButtonContainer"
import "./BioCard.css"

export const BioCard = () => {
  return (
    <>
      <div className="bio-card-container">
        <HeaderThree>
          I am Gitte Beckmann
        </HeaderThree>
        <HeaderOne>
          Web Developer
        </HeaderOne>
        <div className="spacer-one"></div>
        <Body>
        As a web developer, I focus on building user-friendly, functional applications. My experience in teaching, research, and project management gives me a unique approach to problem-solving. Always eager to learn, I see every bug 🐛 as an opportunity to grow 🌱.
        </Body>
        <div className="spacer-two"></div>
        <MediaButtonContainer />
      </div>
    </>
  )
}