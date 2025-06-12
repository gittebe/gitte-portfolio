import { Navigation } from "../../components/Navigation/Navigation";
import "./HeaderSection.css";

export const HeaderSection = () => {
  return (
    <header>
      <a href="#about-me" className="skip-link" aria-label="Skip to Portfolio">Portfolio</a>
      <Navigation />
    </header>
  )
}