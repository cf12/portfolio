import React from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

export default class Project extends React.PureComponent {
  constructor (props) {
    super()
  }

  playVideo = () => {
    this.refs.video.play()

  }

  rewindVideo = () => {
    this.refs.video.pause()
    this.refs.video.currentTime = 0
  }

  render () {
    const {
      name,
      title
    } = this.props

    return (
      <Link
        to={'/projects/' + name}
        className='project flex-center flex-col'
        onMouseEnter={this.playVideo}
        onMouseLeave={this.rewindVideo}
      >
        <video
          className='project__video'
          ref='video'
          src={require(`assets/projects/${name}/video.webm`)}
          type='video/webm'
          muted loop
        />

        <img
          className='project__background'
          src={require(`assets/projects/${name}/background.jpg`)}
          ref='background'
          alt=''
        />

        <div className='project__overlay-wrapper flex-center flex-col' ref='overlayWrapper'>
          <p className='project__title'>{title}</p>
          {/* <FontAwesomeIcon
            className='project__icon'
            size='3x'
            color='white'
            icon={['far', 'arrow-alt-circle-down']} /> */}
        </div>
      </Link>
    )
  }
}
