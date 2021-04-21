import React from 'react';

// ASSET IMPORTS
import ResumeFile from "../assets/files/freestone-resume-Q12021.pdf";
import DownArrow from "../assets/icons/down-arrow.svg";

// STYLES IMPORTS
import "./Resume.scss";
import "../pages/Work.scss";

function Resume() {
  return ( 
    <>
      <section className="work-header">
        <div className="work-header__title-container">
          <h1 className="work-header__title">Get a small glimpse of<span className="work-header__title--yellow"> my journey</span>  below.</h1>
        </div>
      </section>
      <div className="work-header__arrow-container">
        <img src={DownArrow} alt="colourful arrow pointing down" className="work-header__arrow"/>
      </div>
      <section className="resume__container">
        <div className="resume">
          <iframe src={ResumeFile} className="resume__frame" frameborder="0"></iframe>
        </div>
      </section>
      
    </>
  )
}

export default Resume
