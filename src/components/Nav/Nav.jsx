import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// ASSET IMPORTS
import MikeLogo from "../../assets/logos/mike-narrow.svg";

// STYLES IMPORT
import "./Nav.scss";

function Nav() {
  const [ showMenu, setShowMenu ] = useState(false);

  let menu;
  let menuPageOverlay;

  if(showMenu) {
    menu = <section className="hamburger">
      <h2 className="hamburger__title">Hello!</h2>
      <ul className="hamburger__list">
        <li className="hamburger__item">
          <Link className="hamburger__link" to="/about" onClick={() => setShowMenu(!showMenu)}>About</Link>
        </li>
        <li className="hamburger__item">
          <Link className="hamburger__link" to="/work" onClick={() => setShowMenu(!showMenu)}>Work</Link>
        </li>
        <li className="hamburger__item">
          <Link className="hamburger__link" to="/contact" onClick={() => setShowMenu(!showMenu)}>Contact</Link>
        </li>
        <li className="hamburger__item">
          <Link className="hamburger__link" to="/resume" onClick={() => setShowMenu(!showMenu)}>Resume</Link>
        </li>
      </ul>
      <div className="nav__hamburger">
        <FontAwesomeIcon icon={faTimes} onClick={() => setShowMenu(!showMenu)} />
      </div>
    </section>

    menuPageOverlay = <div className="hamburger__page-overlay" onClick={() => setShowMenu(!showMenu)}></div>
  }

  return (
    <nav className="nav">
      <div className="nav__left-container">
        <ul className="nav__list">
          <li className="nav__item nav__item--blue">
            <Link to="/about" className="nav__link">About</Link>
          </li>
          <li className="nav__item nav__item--red">
            <Link to="/work" className="nav__link">Work</Link>
          </li>
        </ul>
      </div>
      <div className="nav__logo">
        <Link to="/">
          <img src={MikeLogo} alt="the word mike with multiple colours for each letter"/>
        </Link>
      </div>  
      <div className="nav__right-container">
        <ul className="nav__list">
          <li className="nav__item nav__item--green">
            <Link to="/contact" className="nav__link">Contact</Link>
          </li>
          <li className="nav__item nav__item--yellow">
            <Link to="/resume" className="nav__link">Resume</Link>
          </li>
        </ul>
      </div>
      <div className="nav__hamburger">
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </div>
      {menuPageOverlay}
      {menu}
    </nav>
  )
}

export default Nav
