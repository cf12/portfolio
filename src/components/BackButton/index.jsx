import React from 'react'
import { Link } from 'react-router-dom'

import { FaArrowLeft } from 'react-icons/fa'

import './index.scss'

export default class BackButton extends React.Component {
  render () {
    return (
      <Link className='back-bt' to='/'>
        <FaArrowLeft
          className='back-bt__icon'
          size='24px'
        />

        <h3>BACK</h3>
      </Link>
    )
  }
}
