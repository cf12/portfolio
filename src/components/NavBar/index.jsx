import React from 'react'

import './index.scss'

import Button from './Button/Button.jsx'

class NavBar extends React.Component {
  render () {
    return (
      <div className='navbar flex-row'>
        <img className='icon' src={require('assets/images/profile-pic.png')} alt='Profile' />

        <Button name='PROJECTS' linkTo='projects' />
        <Button name='ABOUT' linkTo='about' />
        <Button name='CONTACT' linkTo='contact' />
      </div>
    )
  }
}

export default NavBar
