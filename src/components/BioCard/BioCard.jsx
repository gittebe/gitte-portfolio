import { HeaderOne, HeaderThree, Body } from "../../ui/Typography/Typography";
import "./BioCard.css";

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
          I'm a web developer and CPACC-certified accessibility specialist with a strong academic background in research and education. I bring a unique perspective to web development through my interdisciplinary experience in anthropology, disability studies, and inclusive design. After completing an intensive web development bootcamp at Technigo in Stockholm, I have been actively involved in building accessible and user-friendly web applications using technologies like HTML, CSS, JavaScript, TypeScript, React, and Node.js. My current pro-bono work focuses on creating inclusive websites for small organizations and community initiatives, aligning with my commitment to digital equity and universal design.
        </Body>
        <Body>
          Before transitioning into tech, I spent over a decade in academia and education, working internationally as a researcher, lecturer, and language instructor. My doctoral work explored accessibility and inclusion in post-conflict Uganda, and I’ve led international research collaborations, taught in multicultural classrooms, and curated exhibitions. 
        </Body>
        <Body>
          Fluent in German and English, with professional working proficiency in Swedish, I am now seeking to join collaborative teams in Austria that value accessibility, innovation, and purposeful design.
        </Body>
        </section>
        <div className="spacer-two"></div>
      </div >
    </>
  )
}