import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { BioCard } from "../../components/BioCard/BioCard";
import { BioImage } from "../../ui/BioImage/BioImage";
import "./BioSection.css";

export const BioSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  useEffect(() => {
    if (inView) {
      document.title = "About me - Portfolio Gitte";
    }
  }, [inView]);

  return (
    <section ref={ref} className="bio-section" id="about-me">
      <div className="bio-header">
        <BioCard />
      </div>
      <div className="bio-body">
        <BioImage />
      </div>
    </section>
  )
}