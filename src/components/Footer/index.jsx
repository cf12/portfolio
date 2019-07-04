import React from 'react'

import './index.scss'

import {
  IoLogoCodepen,
  IoLogoGithub,
  IoLogoTwitter,
} from 'react-icons/io'

export default class Footer extends React.Component {
  render () {
    return (
      <footer className='footer flex-crow'>
        <img
          className='footer__logo'
          src={require('../../assets/images/profile-pic.png')}
          alt='Logo'
        />

        <div className='footer__spacer'>
          <p className='footer__text '>
            Made with &lt;3 & some coffee (but not too much)
          </p>
          <div className='footer__icons'>
            <a href='https://github.com/cf12/'>
              <IoLogoGithub />
            </a>

            <a href='https://codepen.io/CF12/'>
              <IoLogoCodepen />
            </a>

            <a href='https://twitter.com/CF12__/'>
              <IoLogoTwitter />
            </a>
          </div>
        </div>

        <p className='footer__text'>Copyright © 2019 - All Rights Reserved </p>
      </footer>
    )
  }
}
