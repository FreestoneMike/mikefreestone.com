import React from 'react'

// ASSET IMPORTS
import ConnectMD from "../../assets/images/connect-md-logo.jpg";

// STYLES IMPORTS
import "./ProjectCard.scss";

function ConnectMDCard() {
  return (
    <article className="project">
      <div className="project__img-container">
        <img src={ConnectMD} alt="" className="project__img"/>
      </div>
      <div className="project__info-container">
        <h1 className="project__title">ConnectMD</h1>
        <p className="project__info">
          As part of a 24-hour Hackathon hosted by Google and BrainStation, I worked alongside a team of developers, designers, data scientists and marketers to create this app to connects travellers with doctors that meet specific needs anywhere in the world.
        </p>
      </div>
      <a href="https://github.com/FreestoneMike/tinder-md" target="blank" className="project__link">
        View Code
      </a>
    </article>
  )
}

export default ConnectMDCard
