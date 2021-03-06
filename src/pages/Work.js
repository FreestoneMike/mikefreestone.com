import { useEffect } from 'react'
import React from 'react'

// COMPONENT IMPORTS
import ProjectCardTurf from "../components/ProjectCards/ProjectCardTurf";
import ConnectMDCard from "../components/ProjectCards/ConnectMDCard";
import MikeFreestoneCom from "../components/ProjectCards/MikeFreestoneCom";

// ASSET IMPORTS
import DownArrow from "../assets/icons/down-arrow.svg";

// STYLES IMPORTS
import "./Work.scss";

function Work() {

  useEffect(() => {
    document.title = "Mike Freestone | Projects";
  }, []);

  return (
    <>
      <section className="work-header">
        <div className="work-header__title-container">
          <h1 className="work-header__title"><span className="work-header__title--red">Projects</span> I loved working on<span className="work-header__title--green">.</span></h1>
        </div>
      </section>
      <div className="work-header__arrow-container">
        <a href="#work-anchor">
          <img src={DownArrow} alt="colourful arrow pointing down" className="work-header__arrow"/>
        </a>
      </div>
      <section className="work" id="work-anchor">
        <div className="work__projects-container">
          <ConnectMDCard />
          <ProjectCardTurf />
          <MikeFreestoneCom />
        </div>
      </section>
      
    </>
  )
}

export default Work
