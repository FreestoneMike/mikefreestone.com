import { useEffect } from 'react'
import React from 'react';

// ASSET IMPORTS
import ResumeFile from "../assets/files/freestone-resume-2021.jpg";
import DownArrow from "../assets/icons/down-arrow.svg";

// STYLES IMPORTS
import "./Resume.scss";
import "../pages/Work.scss";

function Resume() {

  useEffect(() => {
    document.title = "Mike Freestone | Resume";
  }, []);

  return ( 
    <>
      <section className="work-header">
        <div className="work-header__title-container">
          <h1 className="work-header__title">Get a small glimpse of<span className="work-header__title--yellow"> my journey</span>  below.</h1>
        </div>
      </section>
      <div className="work-header__arrow-container">
        <a href="#resume-anchor">
          <img src={DownArrow} alt="colourful arrow pointing down" className="work-header__arrow"/>
        </a>
      </div>
      <section id="resume-anchor" className="resume__container">
        <div className="resume">
          <img src={ResumeFile} className="resume__resume-img" alt="resume document"/>
        </div>
      </section>
      
    </>
  )
}

export default Resume
