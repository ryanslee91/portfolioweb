import React from 'react'

import './Navbar.css'

export default function Navbar() {

  return (
    <div className="navBar">
      <nav className="navList">
        <a id="homeLink" href="/"><h5 id="home">HOME</h5></a>
        <a id="aboutLink" href="#aboutSec"><h5 id="aboutMe">ABOUT</h5></a>
        <a id="pfLink" href="#portfolioSec"><h5 id="portfolio">PORTFOLIO</h5></a>
        <a id="contactLink" href="#contactSec"><h5 id="contactMe">CONTACT</h5></a>
        <a id="resumeLink" href="https://drive.google.com/file/d/104kQNR0obtH3YXGlRPAzdxAzQgCMKQt8/view?usp=sharing" target='_blank' rel='noreferrer'><h5 id="resume">RESUME</h5></a>
      </nav>
    </div>
  )
}
