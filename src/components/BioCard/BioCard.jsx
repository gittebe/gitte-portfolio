import { HeaderOne, HeaderThree, Body } from "../../ui/Typography/Typography"
import { MediaLinkContainer } from "../MediaLinkContainer/MediaLinkContainer"
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
          Hello! I'm Gitte, a full-stack web developer with international work experience across Europe, East Africa, and the United States. I now live in a small village in Sörmland, about an hour by train from Stockholm, Sweden.
        </Body>
        <Body>
          My first introduction to HTML was back in 2006. Since then, content management and website development with CMS platforms have been part of my professional and volunteer work. However, it wasn't until 2024 that I decided to fully pursue web development as my full-time profession.
        </Body>
        <Body>
          What fascinates me about coding is seeing ideas come to life, being able to learn continuously, solve problems, and find creative ways to make things happen. Right now, my biggest passion is working with React: building complex structures, designing user interfaces, and connecting the frontend to APIs to display data in a way that’s both accessible and engaging for users.
        </Body>
        <div className="spacer-two"></div>
        <MediaLinkContainer />
      </div >
    </>
  )
}