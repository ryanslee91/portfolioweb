import React from 'react'
import './Contact.css'
import {Email, LinkedIn} from '@material-ui/icons'

export default function Contact() {

  return (
    <div className="contactDiv">
      <section id="contact">
        <br />
        <hr />
        <br />
    
        <p>
          <span id="contactMsg">PLEASE FEEL FREE TO REACH ME!</span><br />
          <br />
          <div className="contact-box">
            <form action="https://formspree.io/f/mayavnow" method="POST" id="my-form">
              <div className="form-group">
                <label for="yourName">NAME</label><br />
                <input type="text" id="yourName" name="yourName"></input>
              </div>
              <div className="form-group">
                <label for="yourEmail">EMAIL</label><br />
                <input type="email" id="yourEmail" name="yourEmail"></input>
              </div>
              <div className="form-group">
                <label for="subject">SUBJECT</label><br />
                <input type="text" id="subject" name="subject"></input>
              </div>
              <div className="form-group">
                <label for="message">MESSAGE</label><br />
                <textarea type="text" id="message" name="message" cols="30" rows="10"></textarea>
              </div>
              <button id="sendMsg" type="submit">Send Message</button>
            </form>
          </div>
          <div id="status"></div>


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
