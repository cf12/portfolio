import React from 'react'
import OnLoadAnime from 'components/OnLoadAnime.jsx'

import './Showcase.scss'

import Particles from 'components/Particles/Particles.js'

export default class Showcase extends React.Component {
  render () {
    return (
      <div className='showcase'>
        <OnLoadAnime
          duration={1000}
          easing='easeInOutQuart'
          scale={[0.1, 1]}
          rotate={[-560, 0]}
          opacity={[0, 1]} >

          <img className='showcase__pic' src={require('../../../assets/images/profile-pic.png')} />

        </OnLoadAnime>

        <OnLoadAnime
          duration={1500}
          delay={500}
          easing='easeInOutQuart'
          translateY={[80, 0]}
          opacity={[0, 1]} >

          <p className='showcase__subtitle'>
            Just another average keyboard smasher on the internet
          </p>
        </OnLoadAnime>
        
        <Particles />
      </div>
    )
  }
}