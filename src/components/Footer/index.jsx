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
      <div className='footer flex-crow'>
        <img
          className='footer__logo'
          src={require('../../assets/images/profile-pic.png')}
          alt='Logo' />

        <div className='footer__spacer'>
          <p className='footer__text '>Made with &lt;3 and caffeine</p>
          <div className='footer__icons'>
              <IoLogoGithub />
              <IoLogoCodepen />
              <IoLogoTwitter />
          </div>
        </div>

        <p className='footer__text'>Copyright © 2019 - All Rights Reserved </p>
      </div>
    )
  }
}
