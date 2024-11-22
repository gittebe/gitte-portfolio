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
          Frontend Developer
        </HeaderOne>
        <div className="spacer-one"></div>
        <Body>
          I am a junior web developer with a strong background in problem-solving and creating user-friendly applications. With a diverse international professional journey, including teaching, research, and project management, I bring a unique perspective to my work. I am passionate about developing intuitive web solutions that prioritize functionality and user experience.
        </Body>
        <div className="spacer-two"></div>
        <MediaButtonContainer />
      </div>
    </>
  )
}