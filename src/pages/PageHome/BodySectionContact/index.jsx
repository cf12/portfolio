import React from 'react'

import './index.scss'

import {
  FaEnvelopeOpen,
  FaDiscord,
  FaGithub
} from 'react-icons/fa'


class BodySectionContact extends React.PureComponent {
  render () {
    return (
      <div className='sec-contact'>
        <h5 className='title-label'>#04</h5>
        <h1 className='title'>CONTACT ME</h1>

        <div className='sec-contact__text'>
          <p>If you have any questions, business inquiries, or just wanna chat with me, you can find me on any of the following:</p>

          <span className='sec-contact__text__entry'>
            <FaEnvelopeOpen />
            <a href='mailto:brian@cf12.org'>brian@cf12.org</a>
          </span>

          <span className='sec-contact__text__entry'>
            <FaDiscord />
            <h3>CF12#1240</h3>
          </span>

          <span className='sec-contact__text__entry'>
            <FaGithub />
            <a href='https://github.com/cf12'>github.com/cf12</a>
          </span>
        </div>
      </div>
    )
  }
}

export default BodySectionContact
