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
      <div className="wrapper">
        <Header />

        <div className="wrapper-showcase">
          <div className="showcase-particles">
            <Particles params={particlejsConfig} />
          </div>
          <p className="showcase-title"> CF12 </p>
          <p className="showcase-subtitle"> Placeholder text, and more placeholder text </p>
        </div>

        <div className="wrapper-body">
          <div className="body-main-1">
            <div className="left-pane">
              <div className="text-wrapper">
                <p className="main-title"> About Me </p>
                <p className="main-text">
                  I am a 14 year old attending Roberto Clemente Middle School, who is currently pursuing a career in Computer Science. I mainly work on
                  front end design, but I also work on back end NodeJS and a bit of python. for class. I have worked on many projects involving Discord
                  bots, TF2 trade bots, and more things related to bots. Speaking of bots, I really like designing bots.
                </p>
              </div>
            </div>

            <div className="right-pane">
              <img className="main-image" src={Bg1} alt="Not found." />
            </div>
          </div>

          <div className="body-main-2">
            <div className="left-pane">
              <div className="container">
                <div className="Heading">
                  <p> <u> What I'm Decent At </u> </p>
                  <img className="Icon" src='./icons/ic_thumb_up_black_24px.svg' alt="404 Not Found" />
                </div>

                <ul>
                  <li className="main-text"> Backend NodeJS Development </li>
                  <li className="main-text"> Frontend HTML, CSS, and JS development </li>
                  <li className="main-text"> Discord Bot Development </li>
                  <li className="main-text"> A tiny bit of Java </li>
                  <li className="main-text"> Python </li>
                </ul>
              </div>
            </div>

            <div className="right-pane">
              <div className="container">
                <div className="Heading">
                  <p> <u> What I'm Terrible At </u> </p>
                  <img className="Icon" src={require('./icons/ic_thumb_down_black_24px.svg')} alt="404 Not Found" />
                </div>
                <ul>
                  <li className="main-text"> Any type of animation / modeling </li>
                  <li className="main-text"> C++ (Still working on it!)</li>
                  <li className="main-text"> GoLang </li>
                </ul>
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
