import React from 'react';
import { Link } from 'react-router-dom';

// ASSET IMPORTS
import MikeLogo from "../../assets/logos/mike.svg";

// STYLES IMPORT
import "./Nav.scss";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__left-container">
        <ul className="nav__list">
          <li className="nav__item">
            <Link className="nav__link">About</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link">Work</Link>
          </li>
        </ul>
      </div>
      <div className="nav__logo">
        <img src={MikeLogo} alt="mike text with multiple colours"/>
      </div>
      <div className="nav__right-container">
        <ul className="nav__list">
          <li className="nav__item">
            <Link className="nav__link">Contact</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link">Resume</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
