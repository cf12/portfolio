import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './ToHomepageButton.scss'

export default class ToHomepageButton extends React.Component {
  render () {
    return (
      <Link className='to-homepage-button__container flex--center' to='/'>
        <FontAwesomeIcon
          icon='arrow-alt-circle-left'
          color='white'
          size='2x' />

        <p>Go To Homepage</p>
      </Link>
    )
  }
}
