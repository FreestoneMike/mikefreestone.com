import React from 'react'

// ASSET IMPORTS
import TurfThumbnail from "../../assets/images/turf-thumbnail2.jpg";

// STYLES IMPORTS
import "./ProjectCard.scss";

function ProjectCard() {
  return (
    <article className="project">
      <div className="project__img-container">
        <img src={TurfThumbnail} alt="" className="project__img"/>
      </div>
      <div className="project__info-container">
        <h1 className="project__title">Turf</h1>
        <p className="project__info">
          Turf brings life to the basketball courts of of the world by creating a  simple way to invite other players that is rewarding and competitive.
        </p>
        <p className="project__info">
          Turf uses Foursquare’s Places API to locate basketball courts based on user location.
        </p>
      </div>
      <a href="https://github.com/FreestoneMike" target="blank" className="project__link">
        View Code
      </a>
      <a href="https://turf.netlify.com" target="blank" className="project__link">
        Demo
      </a>
    </article>
  )
}

export default ProjectCard
