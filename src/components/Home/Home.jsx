import React from 'react'
import Banner from '../Banner/Banner'
import AboutMe from '../AboutMe/AboutMe'
import Portfolio from '../Portfolio/Portfolio'  

export default function Home() {


  return (
    <div className="homeDiv">
      <div className="main" id="banner">
      <Banner />
      </div>
      <div className="main" id="about">
      <AboutMe />
      </div>
      <div className="main" id="portfolio">
      <Portfolio />
      </div>
    </div>
  )
}
