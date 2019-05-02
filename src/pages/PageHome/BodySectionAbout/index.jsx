import React from 'react'

import './index.scss'

export default class BodySectionAbout extends React.Component {
  render () {
    return (
      <div className='sec-about flex-crow'>
        {/* <div className='sec-about__shapes-bg' /> */}
        <div className='sec-about__left'>
          <h5 className='sec-about__left__sec-label'>
            #01
          </h5>
          <h1 className='sec-about__left__title'>
            ABOUT ME
          </h1>

          <p className='sec-about__left__body'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className='sec-about__img' />
      </div>
    )
  }
}
