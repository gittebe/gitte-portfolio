import { HeaderTwo } from "../../ui/Typography/Typography";
import { JourneyCard } from "../../components/JourneyCard/JourneyCard";
import "./JourneySection.css"

export const JourneySection = () => {
  return (
    <section className="journey-section">
      <HeaderTwo>
        My Journey
      </HeaderTwo>
      <div className="journey-scroll-container">
        <JourneyCard></JourneyCard>
      </div>
    </section>
  )
}