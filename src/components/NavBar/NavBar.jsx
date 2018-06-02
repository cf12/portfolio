import React from 'react'

import './NavBar.scss'

import Button from './Button/Button.jsx'

export default class NavBar extends React.Component {
  render () {
    return (
      <div className='navbar'>
        <Button name='' />
        <Button name='' />
        <Button name='Projects' />
        <Button name='Contact' />
      </div>
    )
  }
}
