import React from 'react';
import {Email, LinkedIn} from '@material-ui/icons'
import "./Footer.css";

export default function Footer() {
  return (
    <div class="footer">
      <a id="email" href={`mailto:ryanslee91@gmail.com`}>
            <Email/>
          </a>
          <a id="linkedIn" href="https://www.linkedin.com/in/ryan-lee-801394a5/" target='_blank' rel='noreferrer'>
            <LinkedIn/>
            </a>
      <h5>CREATED BY RYAN LEE</h5>
    </div>
  )
}
