import React from 'react'

import './NavBar.scss'

import Button from './Button/Button.jsx'

export default class NavBar extends React.Component {
  render () {
    return (
      <div className='navbar flex--center flex--row'>
        <Button name='Story' linkTo='story' />
        <Button name='Skills' linkTo='skills' />
        <Button name='Projects' linkTo='projects' />
        <Button name='Contact' linkTo='contact' />
      </div>
    )
  }
}
