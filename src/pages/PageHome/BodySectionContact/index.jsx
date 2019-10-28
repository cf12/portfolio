import React from 'react'

import './index.scss'

import Button from 'components/Button'

class BodySectionContact extends React.PureComponent {
  render () {
    return (
      <div className='sec-contact'>
        <h5 className='title-label'>#03</h5>
        <h1 className='title'>CONTACT ME</h1>

        <div className='sec-contact__text'>
          <p>If you have any questions, business inquiries, or just wanna chat with me, you can find me on any of the following:</p>

          <div className='sec-contact__text__buttons'>
            <Button
            href='mailto:brian@cf12.org'
            text='brian@cf12.org'
              icon='FaEnvelope'
            />

            <Button
              href='https://github.com/cf12'
              text='github.com/cf12'
              icon='FaGithub'
            />

            <Button
              href=''
              text='CF12#1240'
              icon='FaDiscord'
            />
          </div>
        </div>
      </div>
    )
  }
}

export default BodySectionContact
