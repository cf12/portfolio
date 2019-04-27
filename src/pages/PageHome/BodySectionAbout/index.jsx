import React from 'react'

import HighlightedText from 'components/HighlightedText'

import './index.scss'
import { primary } from 'styles/colors.scss'

export default class BodySectionAbout extends React.Component {
  render () {
    return (
      <div className='sec-about flex-ccol'>
        <div className='sec-about__shapes-bg' />
        <div className='sec-about__wrapper flex-row'>
          <div className='sec-about__wrapper__text flex-col'>
            <h1 className='sec-about__wrapper__text__title'>
              My name is
            </h1>

            <HighlightedText
              bgColor={primary}
              textColor='white'
              textWeight='bold'
              className='sec-about__wrapper__text__title sec-about__wrapper__text__title--highlight'
            >
              Brian Xiang.
            </HighlightedText>

            <div className='sec-about__wrapper__text__subtitle'>
              <p>I'm a novice programmer,</p>
              <p>aspiring web developer,</p>
              <p>and cybersecurity enthusiast.</p>
            </div>
          </div>

          <div className='sec-about__wrapper__img' />
        </div>
      </div>
    )
  }
}
