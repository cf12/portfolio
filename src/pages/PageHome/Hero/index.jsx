import React from 'react'
import {
  IoLogoCodepen,
  IoLogoGithub,
  IoLogoTwitter,
} from 'react-icons/io'

import './index.scss'

class Hero extends React.Component {
  render () {
    return (
      <div className='hero flex-ccol'>
        <img
          className='hero__icon'
          src={require(`assets/icons/wave.png`)}
          alt=''
        />

        <h1 className='hero__title'>
          Hey, I’m Brian!
        </h1>

        <h3 className='hero__subtitle'>
          I make stuff on the internet.
        </h3>

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
        </div>
      </div>
    )
  }
}

export default Hero
