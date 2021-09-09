import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navBar">
      <header className="navList">
        <h5 id="home">HOME</h5>
        <h5 id="aboutMe">ABOUT ME</h5>
        <h5 id="portfolio">PORTFOLIO</h5>
        <h5 id="contactMe">CONTACT ME</h5>
        <h5 id="resume">RESUME</h5>
      </header>
    </div>
  )
}
