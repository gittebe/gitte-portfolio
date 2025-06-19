import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { HeaderTwo } from "../../ui/Typography/Typography";
import { JourneyCardList } from "../../components/JourneyCardList/JourneyCardList";
import "./JourneySection.css";

export const JourneySection = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      document.title = "Personal and professional journey articles - Portfolio Gitte";
    }
  }, [inView]);

  return (
    <section ref={ref} className="journey-section"
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