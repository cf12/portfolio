import React from 'react'
import { animateScroll } from 'react-scroll'

import { FaChevronUp } from 'react-icons/fa'

import './index.scss'

export default class ToTopButton extends React.Component {
  render () {
    return (
      <div
        className='tt-btn flex-center'
        onClick={() => { animateScroll.scrollToTop({ duration: '500' }) }}>

        <FaChevronUp
          color='white'
          size='24px'
        />
      </div>
    )
  }
}
