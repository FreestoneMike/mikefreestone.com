import React from 'react'

// ASSET IMPORTS
import DownArrow from "../assets/icons/down-arrow.svg";

// STYLES IMPORTS
import "./Work.scss";

function Work() {
  return (
    <>
      <section className="work-header">
        <div className="work-header__title-container">
          <h1 className="work-header__title"><span className="work-header__title--red">Projects</span> I loved working on<span className="work-header__title--green">.</span></h1>
        </div>
      </section>
      <div className="work-header__arrow-container">
        <img src={DownArrow} alt="colourful arrow pointing down" className="work-header__arrow"/>
      </div>
      <section className="work">
        <div className="work__projects-container">
        </div>
      </section>
    </>
  )
}

export default Work
