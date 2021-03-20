import React from 'react'
import imageUrlBuilder from "@sanity/image-url"
import sanity from 'libs/sanity'

import Link from 'components/Link'

import styles from './Project.module.scss'

const Project = ({ title, slug, thumbnail }) => {
  thumbnail = imageUrlBuilder(sanity)
    .image(thumbnail)
    .maxWidth(500)
    .maxHeight(300)

  return (
    <Link href={`/projects/${slug.current}`}>
      <div className={styles.parent}>
        <div className={styles.container}>
          <img
            src={thumbnail}
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