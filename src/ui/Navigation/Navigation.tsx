import "./Navigation.css";
import {useState} from "react";

export const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!isMenuOpen)

  return (
    <section id="top" className="navigation-section">
      <button className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>

    <ul className={`ul-navigation ${isMenuOpen ? "open" : ""}`}>
      <li className="li-navigation"><a href="#top" >Home</a></li>
      <li className="li-navigation"><a href="#skills">Skills</a></li>
      <li className="li-navigation"><a href="#projects">Projects</a></li>
      <li className="li-navigation"><a href="#journey">My Journey</a></li>
      <li className="li-navigation"><a href="#contact">Contact</a></li>
    </ul>
    </section>
  )
}