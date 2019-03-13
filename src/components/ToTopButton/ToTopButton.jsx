import React from 'react'
import { animateScroll } from 'react-scroll'

import { FaBeer } from 'react-icons/fa'

import './ToTopButton.scss'

export default class ToTopButton extends React.Component {
  render () {
    return (
      <div
        className='button__container flex-center'
        onClick={() => { animateScroll.scrollToTop({ duration: '500' }) }}>

        <FaBeer
          color='white'
          size='2x' />
      </div>
    )
  }
}
