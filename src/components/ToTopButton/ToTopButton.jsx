import React from 'react'
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { animateScroll } from 'react-scroll'

import './ToTopButton.scss'

fontawesome.library.add(faChevronUp)

export default class ToTopButton extends React.Component {
  render () {
    return (
      <div
        className='button__container flex--center'
        onClick={() => { animateScroll.scrollToTop({ duration: '500' }) }}>

        <FontAwesomeIcon
          icon='chevron-up'
          color='white'
          size='2x' />
      </div>
    )
  }
}
