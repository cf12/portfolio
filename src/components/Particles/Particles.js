import React from 'react'
import ParticlesComponent from 'react-particles-js'
import OnLoadAnime from 'components/OnLoadAnime.jsx'

import './Particles.scss'

const config = require('./config.json')
console.log(config)
export default class Particles extends React.Component {
  render () {
    return (
      <OnLoadAnime
        duration={1000}
        delay={700}
        easing='easeInOutQuart'
        opacity={[0, 1]} >

        <div className='particles'>
          <ParticlesComponent params={config} />
        </div>
      </OnLoadAnime>
    )
  }
}
