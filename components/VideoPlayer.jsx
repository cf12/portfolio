import React, { useState, useRef } from 'react'

import styles from './VideoPlayer.module.scss'

const VideoPlayer = ({ src, className, ...props }) => {
  const [ playing, setPlaying ] = useState(false)

  const video = useRef()

  const toggleVideo = () => {
    if (playing) video.current.pause()
    else video.current.play()

    setPlaying(!playing)
  }

  return (
    <div
      className={styles.container + ' ' + className}
      onClick={toggleVideo}
    >
      <div className={styles.overlay}>
        <div className={styles.button + ' ' + (playing ? styles.paused : '')} />
      </div>

      <video
        className={styles.video}
        ref={video}
        src={src}
        type='video/webm'
        muted loop
      />
    </div>
  )
}


export default VideoPlayer