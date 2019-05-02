import React from 'react'
import { Link } from 'react-scroll'

import './index.scss'

class Button extends React.Component {
  constructor (props) {
    super()

    this.name = props.name
    this.linkTo = props.linkTo
  }

  render () {
    return (
      <Link
        to={this.linkTo}
        smooth
        duration={300}
        className='navbar__button flex-center' >

        <p className='navbar__button__text'>{this.name}</p>
      </Link>
    )
  }
}

class NavBar extends React.Component {
  render () {
    return (
      <header className='navbar flex-row'>
        <img className='navbar__icon' src={require('assets/images/profile-pic.png')} alt='Profile' />

        <Button name='ABOUT' linkTo='about' />
        <Button name='PROJECTS' linkTo='projects' />
        <Button name='CONTACT' linkTo='contact' />
      </header>
    )
  }
}

export default NavBar
