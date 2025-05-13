import { FooterCard } from "../../components/FooterCard/FooterCard";
import { HeaderTwo } from "../../ui/Typography/Typography";
import "./FooterSection.css";

export const FooterSection = () => {
  return (
    <section className="footer-section"
      id="contact"
    >
      <HeaderTwo>Contact</HeaderTwo>
      <FooterCard />
    </section>
  )
}