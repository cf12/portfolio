import React from 'react'
import { Link } from 'react-scroll'
import {
  IoLogoCodepen,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
} from 'react-icons/io'

import {
  FaChevronDown,
  FaFileAlt,
  FaArrowRight
} from 'react-icons/fa'

import BackgroundShapes from 'components/BackgroundShapes'

import './index.scss'

class Hero extends React.Component {
  render () {
    return (
      <div className='hero'>
        <BackgroundShapes />

        <div className='hero__body'>
          <h1 className='hero__body__title'>
            Hey! I'm <mark>Brian</mark>.
          </h1>

          <div className='hero__body__subtitle'>
            <p>I'm a novice <mark>programmer</mark>,</p>
            <p>aspiring <mark>web developer</mark>,</p>
            <p>and <mark>cyber security</mark> enthusiast.</p>
          </div>

          <a
            className='hero__body__button'
            href='https://cf12.github.io/resume/public/resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaFileAlt />
            <p>My Resume</p>
            <FaArrowRight />
          </a>
        </div>

        <div className='hero__buttons flex-col'>
          <a href='https://github.com/cf12/'>
            <IoLogoGithub />
          </a>

          <a href='https://codepen.io/CF12/'>
            <IoLogoCodepen />
          </a>

          <a href='https://twitter.com/CF12__/'>
            <IoLogoTwitter />
          </a>

          <a href="https://www.linkedin.com/in/brian-x-23334b189/">
            <IoLogoLinkedin />
          </a>
        </div>

        <Link
          to='about'
          duration={300}
          smooth>
          <FaChevronDown className='hero__downchev' />
        </Link>
      </div>
    )
  }
}

export default Hero
