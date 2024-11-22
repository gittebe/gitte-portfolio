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
          Sara is an exceptional developer known for her innovative solutions and exceptional coding abilities. She creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a valuable asset to any project and a standout in the technology field.
        </Body>
        <div className="spacer-two"></div>
        <MediaButtonContainer />
      </div>
    </>
  )
}