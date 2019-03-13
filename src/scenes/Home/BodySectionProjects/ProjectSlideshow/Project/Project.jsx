import React from 'react'
import { Link } from 'react-router-dom'

import './Project.scss'

export default class Project extends React.PureComponent {
  constructor (props) {
    super()

    this.playVideo = () => {
      this.refs.video.play()
    }

    this.rewindVideo = () => {
      this.refs.video.pause()
      this.refs.video.currentTime = 0
    }

    this.title = props.title
    this.name = props.name
  }

  render () {
    return (
      <Link
        to={'/projects/' + this.name}
        className='project flex-center flex-col'
        onMouseEnter={this.playVideo}
        onMouseLeave={this.rewindVideo}
      >
        <video
          className='project__video'
          ref='video'
          src={require(`assets/projects/${this.name}/video.webm`)}
          type='video/webm'
          muted loop
        />

        <img
          className='project__background'
          src={require(`assets/projects/${this.name}/background.jpg`)}
          ref='background'
          alt=''
        />

        <div className='project__overlay-wrapper flex-center flex-col' ref='overlayWrapper'>
          <p className='project__title'>{this.title}</p>
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
