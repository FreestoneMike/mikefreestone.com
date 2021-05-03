import React from 'react'

// ASSET IMPORTS
import MikeFreestoneHome from "../../assets/images/mike-freestone-home.jpg";

// STYLES IMPORTS
import "./ProjectCard.scss";

function MikeFreestoneCom() {
  return (
    <article className="project">
      <div className="project__img-container">
        <img src={MikeFreestoneHome} alt="colorful text of my last name 'Freestone'" className="project__img"/>
      </div>
      <div className="project__info-container">
        <h1 className="project__title">MikeFreestone.com</h1>
        <p className="project__info">
          Of course, I'm building my own personal portfolio using React.js, and the code is publicly available on my GitHub! 
        </p>
        <p className="project__info">
          <br/>I'm excited to continue working on it, but if you're so excited that you can't wait, you can view the code through the link below! 
        </p>
      </div>
      <a href="https://github.com/FreestoneMike/mikefreestone.com" target="blank" className="project__link">
        View Code
      </a>
    </article>
  )
}

export default MikeFreestoneCom
