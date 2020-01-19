import React from 'react'

import Link from 'components/Link'

import styles from './Project.scss'

import projects from 'assets/projects/projects.json'

const Project = (props) => {
  const { title } = projects[props.name]

  return (
    <Link href={`/projects/${props.name}`}>
      <div className={styles.parent}>
        <div className={styles.container}>
          <img
            src={require(`assets/projects/${props.name}/thumbnail.jpg`)}
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