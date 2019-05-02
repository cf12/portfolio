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
        <h5 className='sec-contact__sec-label'>#03</h5>
        <h1 className='sec-contact__title'>CONTACT ME</h1>

        <div className='sec-contact__text'>
          <p>If you have any questions, business inquiries, or just wanna chat with me, you can find me on any of the following:</p>

          <span className='sec-contact__text__entry'>
            <FaEnvelopeOpen />
            <h3>brian@cf12.org</h3>
          </span>

          <span className='sec-contact__text__entry'>
            <FaDiscord />
            <h3>CF12#1240</h3>
          </span>

          <span className='sec-contact__text__entry'>
            <FaGithub />
            <h3>github.com/cf12</h3>
          </span>
        </div>
      </div>
    )
  }
}

export default BodySectionContact
