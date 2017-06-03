import React, { Component } from 'react'
import Particles from 'react-particles-js'

import Loader from './Loader.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import './PageMain.css'

const $ = require('jquery')
const particlejsConfig = require('./config/particlejs-config.json')

class PageMain extends Component {
  render () {
    return (
      <div className='wrapper'>
        <Loader />
        <Header />

        <div className='wrapper-showcase'>
          <div className='showcase-particles'>
            <Particles params={particlejsConfig} />
          </div>
          <p className='showcase-title'> CF12 </p>
          <p className='showcase-subtitle'> Just Another Amateur Keyboard Smasher </p>
        </div>

        <div className='wrapper-body'>
          <div className='body-about' id='about'>
            <div className='left-pane'>
              <div className='text-wrapper'>
                <p className='main-title' style={{ fontFamily: 'MuliBoldItalic' }}> About Me </p>
                <p className='main-text'>
                  Hey there! My name is Brian (or CF12), and I am a 14 year old currently attending Roberto Clemente Middle School.
                  My story began at a very young age. I was gifted a laptop for my 10th birthday, and I instantly
                  fell in love with it. Every single day, I would attempt to discover more about my laptop, and I
                  slowly learned how to use my laptop. I taught myself how to type (which did not turn out so great), and I
                  began programming when I was 11.
                </p>

                <p className='main-text'>
                  When I first began coding, it wasn't my primary focus. I would learn bits and bits of Python and Java on Codeacademy whenever I was bored.
                  I didn't take coding seriously back then because I couldn't see the potential of coding yet. When I was in 7th grade, we took a class on Processing, a sketchbook language based off of Java. Processing was one of the fundamental
                  reasons why I began front end design, because I could see visually what I was coding. And that's where it pretty much began. I don't use Processing
                  anymore, but I still appreciate the classes I've taken for it. Later that same summer, my friend showed me how to use NodeJS, and
                  I began expanding into HTML, CSS, JavaScript, Golang, and much much more.
                </p>

                <p className='main-text'>
                  To conclude my bio, I was never a coding fanatic. I was pretty much like any other student during my middle school years. Nonetheless,
                  I loved being able to see and create great visual designs with code, and that's what ultimately brought me into coding. Coding
                  is a powerful tool, but if you don't make it look good, people won't realize how powerful it is.
                </p>
              </div>
            </div>

            <div className='right-pane'>
              <img className='main-image' src={require('./images/para1_bg.gif')} alt='Not found.' />
            </div>
          </div>

          <div className='body-procon'>
            <div className='left-pane'>
              <div className='container'>
                <div className='heading'>
                  <p style={{fontFamily: 'MuliBoldItalic'}}> What I'm Decent At </p>
                  <svg className='icon' fill='#FFF' height='100' viewBox='0 0 24 24' width='100' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M0 0h24v24H0z' fill='none' />
                    <path d='M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z'/>
                  </svg>
                </div>

                <ul style={{listStyleType: 'none'}}>
                  <li className='text'> Backend NodeJS Development </li>
                  <li className='text'> Frontend HTML, CSS, and JS development </li>
                  <li className='text'> Discord Bot Development </li>
                  <li className='text'> A tiny bit of Java </li>
                  <li className='text'> Python </li>
                </ul>
              </div>
            </div>

            <div className='right-pane'>
              <div className='container'>
                <div className='heading'>
                  <p style={{fontFamily: 'MuliBoldItalic'}}> What I'm Terrible At </p>
                  <svg className='icon' fill='#FFF' height='100' viewBox='0 0 24 24' width='100' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M0 0h24v24H0z' fill='none' />
                    <path d='M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z'/>
                  </svg>
                </div>

                <ul style={{listStyleType: 'none'}}>
                  <li className='text'> Any type of animation / modeling </li>
                  <li className='text'> C++ (Still working on it!)</li>
                  <li className='text'> GoLang </li>
                  <li className='text'> Finishing my chores </li>
                  <li className='text'> Getting sleep </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='body-projects' id='projects'>
            <p className='title' style={{fontFamily: 'MuliBoldItalic'}}> My Projects </p>
            <div className='wrapper-projects'>

              <div className='project-item' id='project1'>
                <img className='picture' src={require('./images/project1_bg.png')} alt='404 File Not Found' />
                <p className='title'> Discord Bots </p>
                <p className='desc'> When I was introduced to Node.JS and JavaScript, I began learning the language by coding Discord Bots. It was a great introduction to programming in node for me because it was an opportunity for me to create something realistic and interactive for my group on Discord. In fact, all of my Discord bots are still being used actively as of today. </p>
                <div className='button'>
                  <a className='no-nav-style' href='https://github.com/CF12/' target='_blank'> Link to GitHub </a>
                </div>
              </div>

              <div className='project-item' id='project2'>
                <img className='picture' src={require('./images/project2_bg.png')} alt='404 File Not Found' />
                <p className='title'> Minecraft Server Management </p>
                <p className='desc'> I've created and managed many custom Minecraft servers in the past few years, and the majority of my knowledge in scripting for Windows and Linux have come from managing Minecraft servers. Additionally, I've developed a few small plugins for my servers in Java. </p>
                {/*<div className='button'>*/}
                  {/*<a className='no-nav-style' href='https://github.com/CF12/' target='_blank'> Link to GitHub </a>*/}
                {/*</div>*/}
              </div>

              <div className='project-item' id='project3'>
                <img className='picture' src={require('./images/project3_bg.png')} alt='404 File Not Found' />
                <p className='title'> WiFi Hotspot Project </p>
                <p className='desc'> During April, my friend and I worked on deploying a project onto a Raspberry Pi that provided others free wifi off of our own cellular data plans during a long period of time on the road. Our project ended up failing due to issues with our captive portals, but the back end of our project worked quite nicely. </p>
                {/*<div className='button'>*/}
                  {/*<a className='no-nav-style' href='https://github.com/CF12/' target='_blank'> Link to GitHub </a>*/}
                {/*</div>*/}
              </div>

              <div className='project-item' id='project4'>
                <img className='picture' src={require('./images/project3_bg.png')} alt='404 File Not Found' />
                <p className='title'> Bonk.io in PyGame </p>
                <p className='desc'> As a project for school, my partner and I attempted recreating a popular web game called bonk.io. The premise of the game was to bounce around as a ball, and knock people off the map to win. We attempted recreating this game in PyGame, and we even set up a server to serve connections in order to fulfill the multiplayer experience. </p>
                <div className='button'>
                  <a className='no-nav-style' href='https://github.com/yayes2/PythonGame' target='_blank'> Link to GitHub project </a>
                </div>
              </div>
            </div>
          </div>

          <div className='body-social' id='social'>
            <div className='container'>
              <p className='title'> Social </p>
              <div className='container-cards'>
                <div className='card' id='card-twitter'>
                  <div className='container' />
                  <svg className='image' width='32px' height='32px' viewBox='0 0 32 32'>
                    <path fill='#FFF  ' d='M32,6.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6C25.7,3.8,24,3,22.2,3
                      c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5C10.3,10.8,5.5,8.2,2.2,4.2c-0.6,1-0.9,2.1-0.9,3.3c0,2.3,1.2,4.3,2.9,5.5
                      c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1
                      c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1C2.9,27.9,6.4,29,10.1,29c12.1,0,18.7-10,18.7-18.7
                      c0-0.3,0-0.6,0-0.8C30,8.5,31.1,7.4,32,6.1z' />
                  </svg>
                  <p className='info'> Twitter </p>
                </div>
                <div className='card' id='card-github'>
                  <div className='container' />
                  <svg className='image' width='32px' height='32px' viewBox='0 0 32 32'>
                    <path fill='#FFF  ' d="M16,0.4c-8.8,0-16,7.2-16,16c0,7.1,4.6,13.1,10.9,15.2
                      c0.8,0.1,1.1-0.3,1.1-0.8c0-0.4,0-1.4,0-2.7c-4.5,1-5.4-2.1-5.4-2.1c-0.7-1.8-1.8-2.3-1.8-2.3c-1.5-1,0.1-1,0.1-1
                      c1.6,0.1,2.5,1.6,2.5,1.6c1.4,2.4,3.7,1.7,4.7,1.3c0.1-1,0.6-1.7,1-2.1c-3.6-0.4-7.3-1.8-7.3-7.9c0-1.7,0.6-3.2,1.6-4.3
                      c-0.2-0.4-0.7-2,0.2-4.2c0,0,1.3-0.4,4.4,1.6c1.3-0.4,2.6-0.5,4-0.5c1.4,0,2.7,0.2,4,0.5C23.1,6.6,24.4,7,24.4,7
                      c0.9,2.2,0.3,3.8,0.2,4.2c1,1.1,1.6,2.5,1.6,4.3c0,6.1-3.7,7.5-7.3,7.9c0.6,0.5,1.1,1.5,1.1,3c0,2.1,0,3.9,0,4.4
                      c0,0.4,0.3,0.9,1.1,0.8C27.4,29.5,32,23.5,32,16.4C32,7.6,24.8,0.4,16,0.4z" />
                  </svg>
                  <p className='info'> GitHub </p>
                </div>
                <div className='card' id='card-codepen'>
                  <div className='container' />
                  <svg className='image' width='32px' height='32px' viewBox='0 0 32 32'>
                    <path fill='#FFF  ' d="M32,10.9C32,10.9,32,10.9,32,10.9c0-0.1,0-0.1,0-0.2c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1
                      c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0,0,0-0.1-0.1-0.1c0,0,0,0,0-0.1c0,0,0-0.1-0.1-0.1c0,0,0,0-0.1-0.1c0,0-0.1,0-0.1-0.1
                      c0,0,0,0-0.1,0c0,0,0,0,0,0L16.8,0.2c-0.5-0.3-1.1-0.3-1.5,0L0.6,10c0,0,0,0,0,0c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0.1c0,0,0,0-0.1,0.1
                      c0,0,0,0-0.1,0.1c0,0,0,0,0,0.1c0,0,0,0.1-0.1,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1
                      c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0.1,0,0.1,0,0.2v9.7c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1
                      c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0.1,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0.1,0.1c0,0,0,0,0.1,0.1
                      c0,0,0.1,0,0.1,0.1c0,0,0,0,0.1,0c0,0,0,0,0,0l14.6,9.8c0.2,0.2,0.5,0.2,0.8,0.2c0.3,0,0.5-0.1,0.8-0.2L31.4,22c0,0,0,0,0,0
                      c0,0,0,0,0.1,0c0,0,0.1,0,0.1-0.1c0,0,0,0,0.1-0.1c0,0,0,0,0.1-0.1c0,0,0,0,0-0.1c0,0,0-0.1,0.1-0.1c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1
                      c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2v-9.7C32,11.1,32,11,32,10.9z
                       M17.4,3.9l10.8,7.2l-4.8,3.2l-6-4V3.9z M14.6,3.9v6.4l-6,4l-4.8-3.2L14.6,3.9z M2.8,13.7L6.2,16l-3.4,2.3V13.7z M14.6,28.1
                      L3.9,20.9l4.8-3.2l6,4V28.1z M16,19.3L11.1,16l4.9-3.3l4.9,3.3L16,19.3z M17.4,28.1v-6.4l6-4l4.8,3.2L17.4,28.1z M29.2,18.3L25.8,16
                      l3.4-2.3V18.3z" />
                  </svg>
                  <p className='info'> Codepen </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <Footer />
      </div>
    )
  }
}

$(document).ready(() => {
  let $loader = $('.wrapper-loader')

  $('body > :not(.wrapper-loader)').hide()
  $loader.appendTo('body')

  setTimeout(() => {
    $('body').children().show()
    $('.showcase-title, .showcase-subtitle').hide()
    $('.showcase-particles').hide()
    $loader.fadeOut(500)

    setTimeout(() => {
      $('.showcase-title').fadeIn(400, () => {
        $('.showcase-subtitle').fadeIn(400)

        $('.showcase-particles').fadeIn(1000)
      })
    }, 300)
  }, 2000)

  for (let i = 0; i <= 3; i++) {
    let $projectPic = $(`#project${i} > .picture`)

    $('#project' + i).hover(() => {
      $projectPic
        .attr('src', require(`./images/project${i}_bg.gif`))
    }, () => {
      $projectPic
        .attr('src', require(`./images/project${i}_bg.png`))
    })
  }

  $('#card-twitter *').click(() => {
    window.open('https://twitter.com/OfficialCF12', '_blank')
  })

  $('#card-github *').click(() => {
    window.open('https://github.com/CF12', '_blank')
  })

  $('#card-codepen *').click(() => {
    window.open('https://codepen.io/CF12/', '_blank')
  })
})

export default PageMain
