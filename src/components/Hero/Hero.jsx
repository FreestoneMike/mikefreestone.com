import React from 'react'

// ASSET IMPORTS
import Freestone from "../../assets/logos/Freestone.svg";
import SearchIcon from "../../assets/icons/search-icon.svg";

// STYLES IMPORT
import "./Hero.scss";

function Hero() {
  return (
    <header className="hero">
      <section className="hero__container">
        <img src={Freestone} className="hero__logo" alt="freestone text with multiple colours"/>
        <div className="hero__search-container">
          <img src={SearchIcon} className="hero__search-icon" alt="magnifying glass"/>
          <h1 className="hero__title">Full Stack Web Developer</h1>
          <div className="hero__blinking-cursor"></div>
        </div>
          <div className="hero__btn-container">
            <button className="hero__btn">Hire Mike</button>
            <button className="hero__btn">I'm Feeling Lucky</button>
          </div>
      </section>
    </header>
  )
}

export default Hero
