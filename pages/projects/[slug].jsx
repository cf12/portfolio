import React, { useRef } from 'react'
import Router from 'next/router'
import ReactMarkdown from 'react-markdown'



import BackButton from 'components/BackButton'
import VideoPlayer from 'components/VideoPlayer'
import ToTopButton from 'components/ToTopButton'
import Footer from 'components/Footer'

import styles from './[slug].scss'

import projects from 'assets/projects/projects.json'

const PageProject = ({ slug, title, data }) => {
  return (
    <div className={styles.body}>
      <BackButton />

      <div className={styles.hero}>
        <h1 className={styles.title}>
          {title}
        </h1>

        <VideoPlayer
          className={styles.video}
          width='1152px'
          height='648px'
          src={require(`assets/projects/${slug}/video.webm`)}
          overlay
        />
      </div>

      <div className={styles.content}>
        <ReactMarkdown source={data.default} />
      </div>

      <ToTopButton />
      <Footer />
    </div>
  )
}

PageProject.getInitialProps = async (context) => {
  const { slug } = context.query

  if (!(slug in projects)) {
    context.res.writeHead(302, { Location: '/404' })
    context.res.end()
  }

  return {
    slug: slug,
    title: projects[slug].title,
    data: await import(`assets/projects/${slug}/body.md`)
  }
}

export default PageProject