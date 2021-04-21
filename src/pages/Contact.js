import React from 'react';

// ASSET IMPORTS
import ProfilePhoto from "../assets/images/profile-photo.jpg"
import GitHubLogo from "../assets/icons/GitHub-Mark-64px.png"
import LinkedInLogo from "../assets/icons/linked-in-logo.png"

// STYLES IMPORT
import "./Contact.scss";

function Contact() {
  return (
    <section className="contact">
      <div className="contact__container">
        <div className="contact__img-container">
          <img src={ProfilePhoto} alt="mike freestone" className="contact__img"/>
        </div>
        <div className="contact__info-container">
          <h4 className="contact__greeting--title">Hey, thanks for visiting my site!<br/></h4>
          <p className="contact__greeting">If you'd like to learn more about the projects I've worked on, or want to chat about everything sports, click this button to email me or reach out through any of the platforms below.</p>
          
          <form action="mailto:mikefreestone@gmail.com">
            <input className="contact__btn" type="submit" value="Email" />
          </form>
          
          <div className="contact_icon-container">
            <a href="https://github.com/FreestoneMike" target="blank">
              <img src={GitHubLogo} className="contact__icon" alt=""/>
            </a>
            <a href="https://www.linkedin.com/in/michaelfreestone/" target="blank">
              <img src={LinkedInLogo} className="contact__icon" alt=""/>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
