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
              <img className='main-image' src={require('./images/para1_bg.png')} alt='Not found.' />
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
            </div>
          </div>

          <div className='body-social' id='social'>
            <div className='container'>
              <p className='title'> Social </p>
              <div className='container-cards'>
                <div className='card'>
                  <img className='image' alt='404 Not found' />
                  <p className='info'> Twitter </p>
                </div>
                <div className='card'>
                  <img className='image' alt='404 Not found' />
                  <p className='info'> GitHub </p>
                </div>
                <div className='card'>
                  <img className='image' alt='404 Not found' />
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
})

export default PageMain
