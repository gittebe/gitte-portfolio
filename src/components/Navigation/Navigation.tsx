import "./Navigation.css";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navigation-section">
      <button className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation menu">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>

      <ul className={`ul-navigation ${isMenuOpen ? "open" : ""}`}>
        <li className="li-navigation"><a href="#about-me" onClick={closeMenu}>About me</a></li>
        <li className="li-navigation"><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li className="li-navigation"><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li className="li-navigation"><a href="#journey" onClick={closeMenu}>My Journey</a></li>
        <li className="li-navigation"><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  )
}