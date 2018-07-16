import React from 'react'

import './Footer.scss'

export default class Footer extends React.Component {
  render () {
    return (
      <div className='footer flex--center'>
        <p className='footer__text'>Copyright © 2018</p>
        <img
          className='footer__logo'
          src={require('../../assets/images/profile-pic.png')}
          alt='Logo' />
        <p className='footer__text'>All Rights Reserved</p>
      </div>
    )
  }
}
