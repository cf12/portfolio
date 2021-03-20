import React from 'react'

import styles from './BackgroundShapes.module.scss'

const shapes = [
  { dx: 12, dy: 10, size: 4, delay: 0 },
  { dx: 22, dy: 20, size: 6, delay: 1 },
  { dx: 22, dy: 8, size: 3, delay: 3 },
  { dx: 34, dy: 9, size: 7, delay: 2 },
]

const BackgroundShapes = () => {
  return (
    <div className={styles.container}>
      {
        shapes.map(({ dx, dy, size, delay }, key) =>
          <div
            key={key}
            className={styles.square}
            style={{
              width: size + 'vw',
              height: size + 'vw',
              right: dx + '%',
              bottom: dy + '%',
              animationDelay: delay + 's'
            }}
          />
        )
      }

    </div>
  )
}

export default BackgroundShapes