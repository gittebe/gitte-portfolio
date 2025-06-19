import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FooterCard } from "../../components/FooterCard/FooterCard";
import { HeaderTwo } from "../../ui/Typography/Typography";
import "./FooterSection.css";

export const FooterSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      document.title = "Let's work together - Portfolio Gitte";
    }
  }, [inView]);

  return (
    <section ref={ref} className="footer-section"
      id="contact"
    >
      <HeaderTwo>Contact</HeaderTwo>
      <FooterCard />
    </section>
  )
}