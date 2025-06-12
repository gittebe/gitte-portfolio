import { Navigation } from "../../components/Navigation/Navigation";
import "./HeaderSection.css";

export const HeaderSection = () => {
  return (
    <header>
      <a href="#bio" className="skip-link" aria-label="Skip to Portfolio">Portfolio</a>
      <Navigation />
    </header>
  )
}