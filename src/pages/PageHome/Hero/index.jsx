import React from 'react'
import { Link } from 'react-scroll'
import {
  IoLogoCodepen,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
} from 'react-icons/io'

import {
  FaChevronDown
} from 'react-icons/fa'

import './index.scss'

class Hero extends React.Component {
  render () {
    return (
      <div className='hero'>
        <div className='hero__text'>
          <h1 className='hero__text__title'>
            Hey! I'm <mark>Brian</mark>.
          </h1>

          <div className='hero__text__subtitle'>
            <p>I'm a novice <mark>programmer</mark>,</p>
            <p>aspiring <mark>web developer</mark>,</p>
            <p>and <mark>cyber security</mark> enthusiast.</p>
          </div>
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
