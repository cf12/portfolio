import React from 'react'

import './NavBar.scss'

import Button from './Button/Button.jsx'

export default class NavBar extends React.Component {
  render () {
    return (
      <div className='navbar flex--row'>
        <img className='icon' src={require('assets/images/profile-pic.png')} alt='Profile' />
        <div className='label flex--column'>
          <p className='label-text--big'>Brian Xiang</p>
          <p className='label-text--small'>CF12#1240</p>
        </div>

        <Button name='Story' linkTo='story' />
        <Button name='Skills' linkTo='skills' />
        <Button name='Projects' linkTo='projects' />
        <Button name='Contact' linkTo='contact' />
      </div>
    )
  }
}
