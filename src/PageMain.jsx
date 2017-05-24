import React, { Component } from 'react'
import Particles from 'react-particles-js'

import Header from './Header'
import Footer from './Footer'
import './PageMain.css'
import Bg1 from './images/para1_bg.png'

const particlejsConfig = require('./config/particlejs-config.json')

class PageMain extends Component {
  render () {
    return (
      <div className='wrapper'>
        <Header />

        <div className='wrapper-showcase'>
          <div className='showcase-particles'>
            <Particles params={particlejsConfig} />
          </div>
          <p className='showcase-title'> CF12 </p>
          <p className='showcase-subtitle'> Placeholder text, and more placeholder text </p>
        </div>

        <div className='wrapper-body'>
          <div className='body-about'>
            <div className='left-pane'>
              <div className='text-wrapper'>
                <p className='main-title'> About Me </p>
                <p className='main-text'>
                  I am a 14 year old attending Roberto Clemente Middle School, who is currently pursuing a career in Computer Science. I mainly work on
                  front end design, but I also work on back end NodeJS and a bit of python. for class. I have worked on many projects involving Discord
                  bots, TF2 trade bots, and more things related to bots. Speaking of bots, I really like designing bots.
                </p>
              </div>
            </div>

            <div className='right-pane'>
              <img className='main-image' src={Bg1} alt='Not found.' />
            </div>
          </div>

          <div className='body-procon'>
            <div className='left-pane'>
              <div className='container'>
                <div className='heading'>
                  <p> What I'm Decent At </p>
                  <svg className='icon' fill='#FFF' height='100' viewBox='0 0 24 24' width='100' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M0 0h24v24H0z' fill='none'/>
                    <path d='M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z'/>
                  </svg>
                </div>

                <ul>
                  <li className='main-text'> Backend NodeJS Development </li>
                  <li className='main-text'> Frontend HTML, CSS, and JS development </li>
                  <li className='main-text'> Discord Bot Development </li>
                  <li className='main-text'> A tiny bit of Java </li>
                  <li className='main-text'> Python </li>
                </ul>
              </div>
            </div>

            <div className='right-pane'>
              <div className='container'>
                <div className='heading'>
                  <p> What I'm Terrible At </p>
                  <svg className='icon' fill='#FFF' height='100' viewBox='0 0 24 24' width='100' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M0 0h24v24H0z' fill='none'/>
                    <path d='M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z'/>
                  </svg>
                </div>
                <ul>
                  <li className='main-text'> Any type of animation / modeling </li>
                  <li className='main-text'> C++ (Still working on it!)</li>
                  <li className='main-text'> GoLang </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='body-projects'>
            <div className='wrapper-projects'>
              <div className='project-item project-1'>
                <p className="title"> Title </p>
                <p className="desc"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
              </div>

              <div className='project-item project-2'>
                <p className="title"> Title </p>
                <p className="desc"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
              </div>

              <div className='project-item project-3'>
                <p className="title"> Title </p>
                <p className="desc"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
              </div>

              <div className='project-item project-4'>
                <p className="title"> Title </p>
                <p className="desc"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
              </div>

              <div className='project-item project-5'>
                <p className="title"> Title </p>
                <p className="desc"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
              </div>

              <div className='project-item project-6'>
                <p className="title"> Title </p>
                <p className="desc"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
              </div>
            </div>
          </div>

        </div>

        <Footer />
      </div>
    )
  }
}

export default PageMain
