import React from 'react'

import styles from './VideoPlayer.scss'

export default class VideoPlayer extends React.PureComponent {
  constructor (props) {
    super()

    this.toggleVideo = this.toggleVideo.bind(this)
    this.playVideo = this.playVideo.bind(this)
    this.rewindVideo = this.rewindVideo.bind(this)

    this.sizeStyle = {
      width: props.width,
      height: props.height
    }

    if (props.hover) {
      this.containerProps = {
        onMouseEnter: this.playVideo,
        onMouseLeave: this.rewindVideo
      }
    } else {
      this.containerProps = {
        onClick: this.toggleVideo
      }
    }

    this.state = {
      playing: false
    }
  }

  toggleVideo () {
    if (this.state.playing) this.refs.video.pause()
    else this.refs.video.play()
    this.setState({ playing: !this.state.playing })
  }

  playVideo () {
    this.refs.video.play()
  }

  rewindVideo () {
    this.refs.video.pause()
    this.refs.video.currentTime = 0
  }

  render () {
    return (
      <div
        style={this.sizeStyle}
        className={styles.container + ' ' + this.props.className}
        {...this.containerProps} >

        {
          (this.props.overlay) ?
            <div className={styles.overlay}>
              <div className={styles.button + ' ' + (this.state.playing ? styles.paused : '')} />
            </div> : undefined
        }

        <video
          className={styles.video}
          ref='video'
          src={this.props.src}
          type='video/webm'
          muted loop
        />
      </div>
    )
  }
}
