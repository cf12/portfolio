import React from 'react'

import './index.scss'

export default class BodySectionAbout extends React.Component {
  render () {
    return (
      <div className='sec-about flex-col'>
        <h5 className='title-label'>#01</h5>
        <h1 className='title'>ABOUT ME</h1>


        <div className='sec-about__body flex-row'>
          <div className='sec-about__body__text'>
            <p>
              Hi! My name is Brian Xiang - I'm an amateur web developer and cybersecurity enthusiast,
              who's fluent in frontend & backend development, as well as modern web technologies.
            </p>
            <br />
            <p>
              I have experience with the web stack (HTML, CSS, JS), Python,
              Java, Golang, C, C++, ReactJS, NodeJS, as well as
              linux systems and server management.
            </p>
          </div>

          <div className='sec-about__body__img' />
        </div>
      </div>
    )
  }
}
