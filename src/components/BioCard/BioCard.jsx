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
          I'm a web developer and CPACC-certified accessibility specialist with a strong academic background in research and education.
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