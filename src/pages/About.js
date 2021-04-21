import { useEffect } from 'react'
import React from 'react'

// STYLES IMPORT
import "./About.scss";

function About() {

  useEffect(() => {
    document.title = "Mike Freestone | About";
  }, []);
  
  return (
    <div className="about">
      <h1 className="about__header">
        My mission is to <span className="about__header--blue">partner with a company</span> I can <span className="about__header--red">make a difference</span> with while they help nourish my <span className="about__header--green">love of learning</span>, <span className="about__header--yellow">technology</span> and <span className="about__header--yellow">curiosity</span>.
      </h1>
    </div>
  )
}

export default About
