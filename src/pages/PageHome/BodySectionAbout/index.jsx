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
              Hi! My name is Brian Xiang - I'm an amateur web developer
              and cybersecurity enthusiast, who's experienced in modern
              frontend / backend web development.
            </p>
            <br />
            <p>
              Throughout the years, I've learned and developed with many technologies,
              including HTML, CSS, JS, Python, Java, Golang, C, C++, ReactJS, NodeJS, as well as
              managed linux systems and servers.
            </p>
          </div>

          <div className='sec-about__body__img' />
        </div>
      </div>
    )
  }
}
