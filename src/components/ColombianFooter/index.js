import './ColombianFooter.scss'
import React from 'react';
import logo from "../../asserts/images/colombian-dao-logo3.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faLinkedinIn, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'

export function ColombianFooter() {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-container__ads'>
          <h1>Join our community</h1>
        </div>
        <div className='footer-container__network'> 
          <a href='/'>
            <div className='footer-container-icon'>
              <FontAwesomeIcon icon={faTelegram} className='footer-container-icon__icon'/>
            </div>
          </a>
          <a href='https://www.linkedin.com/in/salviega/'>
            <div className='footer-container-icon'>
              <FontAwesomeIcon icon={faLinkedinIn} className='footer-container-icon__icon'/>
            </div>
          </a>
          <a href='https://github.com/salviega/colombian-dao'>
          <div className='footer-container-icon'>
              <FontAwesomeIcon icon={faDiscord} className='footer-container-icon__icon'/>
            </div>
          </a>
          <a href='https://github.com/salviega/colombian-dao'>
            <div className='footer-container-icon'>
              <FontAwesomeIcon icon={faGithub} className='footer-container-icon__icon'/>
            </div>
          </a>
        </div>
      </div>
      <div className='footer-container-copyright'>
        <p className='footer-container-copyright__copyright'>©2022 CREA COLOMBIA</p>
        <figure className='footer-container-copyright__construction'>
          <img src={logo} alt='logo'/>
        </figure>
      </div>
    </footer>
  )
}
