import React from 'react'

import './index.scss'

export default class BodySectionAbout extends React.Component {
  render () {
    return (
      <div className='sec-about flex-ccol'>
        <div className='sec-about__shapes-bg' />
        <div className='sec-about__wrapper flex-row'>
          <div className='sec-about__wrapper__text'>
            <h1 className='sec-about__wrapper__text__title'>
              My name is
            </h1>

            <h1 className='sec-about__wrapper__text__title sec-about__wrapper__text__title--highlight'>
              Brian Xiang.
            </h1>

            <div className='sec-about__wrapper__text__subtitle'>
              <p>I'm a novice <mark>programmer</mark>,</p>
              <p>aspiring <mark>web developer</mark>,</p>
              <p>and <mark>cyber security</mark> enthusiast.</p>
            </div>
          </div>

          <div className='sec-about__wrapper__img' />
        </div>
      </div>
    )
  }
}
