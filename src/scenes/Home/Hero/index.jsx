import React from 'react'

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
      </div>
    )
  }
}

export default Hero
