import { HeaderOne, HeaderThree, Body } from "../../ui/Typography/Typography"
import { MediaLinkContainer } from "../MediaLinkContainer/MediaLinkContainer"
import "./BioCard.css"

export const BioCard = () => {
  return (
    <>
      <div className="bio-card-container">
        <HeaderOne>
          Gitte Beckmann
        </HeaderOne>
        <p className="web-developer">Web Developer</p>
        <section className="bio-text-section">
        <Body>
          Hello! I'm Gitte, a full-stack web developer with international work experience across Europe, East Africa, and the United States. I now live in a small village in Sörmland, about an hour by train from Stockholm, Sweden.
        </Body>
        <Body>
          What fascinates me about coding is seeing ideas come to life, being able to learn continuously, solve problems, and find creative ways to make things happen. Right now, my biggest passion is working with React: building complex structures, designing user interfaces, and connecting the frontend to APIs to display data in a way that’s both accessible and engaging for users.
        </Body>
        </section>
        <div className="spacer-two"></div>
      </div >
    </>
  )
}