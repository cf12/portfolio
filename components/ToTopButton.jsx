import React from 'react'
import { animateScroll } from 'react-scroll'

import { FaChevronUp } from 'react-icons/fa'

import styles from './ToTopButton.module.scss'

export default class ToTopButton extends React.Component {
  render () {
    return (
      <div
        className={styles.container}
        onClick={() => { animateScroll.scrollToTop({ duration: '500' }) }}>

        <FaChevronUp
          size='24px'
        />
      </div>
    )
  }
}
