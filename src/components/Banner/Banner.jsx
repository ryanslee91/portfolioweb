import React from 'react'
import './Banner.css'


export default function Banner() {

  return (
    <div className="bannerDiv">
      <p className="greeting">HELLO! MY <span id="grName">NAME</span> IS <br />
        <br />
        <span id="ryanLee">RYAN LEE</span>. <br />
        <br />
        I'M A <br />
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h3 class="animate-charcter"> SOFTWARE ENGINEER</h3>
            </div>
          </div>
        </div>
        IN <br />
        <br />
        <span id="address">MALVERN, PENNSYLVANIA</span>.
      </p>
    </div>
  )
}
