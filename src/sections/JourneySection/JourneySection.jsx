import { HeaderTwo } from "../../ui/Typography/Typography";
import { JourneyCardList } from "../../components/JourneyCardList/JourneyCardList";
import "./JourneySection.css";

export const JourneySection = () => {
  return (
    <section className="journey-section"
    id="journey">
      <HeaderTwo>
        My Journey
      </HeaderTwo>
      <div className="journey-scroll-container">
        <JourneyCardList></JourneyCardList>
      </div>
    </section>
  )
}