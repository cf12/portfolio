import React from 'react'
import { Link } from 'react-router-dom'

import { FaBeer } from 'react-icons/fa'

import './ToHomepageButton.scss'

export default class ToHomepageButton extends React.Component {
  render () {
    return (
      <Link className='to-homepage-button__container flex-center' to='/'>
        <FaBeer
          color='white'
          size='2x' />

        <p>Go To Homepage</p>
      </Link>
    )
  }
}
