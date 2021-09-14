import React from 'react'
import './Portfolio.css'
import { GitHub, DesktopWindows } from '@material-ui/icons'

export default function Portfolio() {

  


  return (
    <div className="portfolioDiv">
      <section id="portfolioSec">
        <h1>MY PROJECTS</h1>
        <hr />
        <br />
        <div className="portfolio-image">
          <div className="pf1">
        <img className="pf1-image" src="https://i.imgur.com/2RMCqVO.png" alt="portfolio 1"></img>
          <div className="pf1-overlay pf1-overlay--blur">
            <div id="musicionary">MUSICIONARY</div>
            <p id="pf1-link">
              <a href="https://ryanslee91.github.io/Musicionary/"><DesktopWindows /></a>
              <a href="https://github.com/ryanslee91/Musicionary"><GitHub /></a>
            </p>
          </div>
          </div>
          <div className="pf2">
        <img className="pf2-image" src="https://i.imgur.com/LsEgOXM.png" alt="portfolio 2"></img>
          <div className="pf2-overlay pf2-overlay--blur">
            <div id="weekly-news">WEEKLY NEWS</div>
            <p id="pf2-link">
              <a href="https://weekly-news.netlify.app/"><DesktopWindows /></a>
              <a href="https://github.com/ryanslee91/Weekly_News"><GitHub /></a>
            </p>
          </div>
          </div>
          <div className="pf3">
        <img className="pf3-image" src="https://i.imgur.com/RgeRO6E.png" alt="portfolio 3"></img>
          <div className="pf3-overlay pf3-overlay--blur">
            <div id="skillbid">SKILLBID</div>
            <p id="pf3-link">
              <a href="https://awesome-jepsen-f2cb4f.netlify.app/"><DesktopWindows /></a>
              <a href="https://github.com/AleksandrGorbach/Skill-Bid"><GitHub /></a>
            </p>
          </div>
          </div>
          <div className="pf4">
        <img className="pf4-image" src="https://i.imgur.com/byIEF8K.png" alt="portfolio 4"></img>
          <div className="pf4-overlay pf4-overlay--blur">
            <div id="wonderkid">WONDERKID REPORT</div>
            <p id="pf1-link">
              <a href="https://wonderkid.netlify.app/"><DesktopWindows /></a>
              <a href="https://github.com/ryanslee91/wonderkid_report"><GitHub /></a>
            </p>
          </div>
          </div>
        </div>
        </section>
    </div>
  )
}
