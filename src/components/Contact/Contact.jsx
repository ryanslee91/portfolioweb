import React from 'react'
import './Contact.css'
import {Email, LinkedIn} from '@material-ui/icons'

export default function Contact() {
  return (
    <div className="contactDiv">
      <section id="contactSec">
        <br />
        <hr />
        <p>
          <span id="contactMsg">PLEASE FEEL FREE TO REACH ME!</span><br />
          <br />
          <a id="email" href={`mailto:ryanslee91@gmail.com`}>
            <Email/>
          </a>
          <a id="linkedIn" href="https://www.linkedin.com/in/sang-hyun-ryan-lee-801394a5/" target='_blank' rel='noreferrer'>
            <LinkedIn/>
            </a>
        </p>
      </section>
    </div>
  )
}
