import React from 'react'

import Link from 'components/Link'

import styles from './Project.scss'

const Project = ({ title, slug }) => {
  return (
    <Link href={`/projects/${slug}`}>
      <div className={styles.parent}>
        <div className={styles.container}>
          <img
            src={require(`assets/projects/${slug}/thumbnail.jpg`)}
            alt=''
          />

          <div className={styles.active}>
            <h1>{title}</h1>
          </div>
        </div>

        <div className={styles.backgroundBG} />
      </div>
    </Link>
  )
}

export default Project