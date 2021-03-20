import React, { useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import { NextSeo } from 'next-seo'
import sanity from 'libs/sanity'

import BackButton from 'components/BackButton'
import VideoPlayer from 'components/VideoPlayer'
import ToTopButton from 'components/ToTopButton'
import Footer from 'components/Footer'

import styles from './[slug].module.scss'

// TODO: Add SEO description in sanity studio
const PageProject = ({ slug, title, body, videoUrl }) => {
  slug = slug.current

  return (
    <>
      <NextSeo
        title={`CF12.org - ${title}`}
        description={body.substring(0, 150)}
      />

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
            src={videoUrl}
          />
        </div>

        <div className={styles.content}>
          <ReactMarkdown source={body} />
        </div>

        <ToTopButton />
        <Footer />
      </div>
    </>
  )
}

PageProject.getInitialProps = async ctx => {
  const project = (await sanity.fetch(`
    *[_type == "project" && slug.current == "${ctx.query.slug}"][0] {
      slug,
      title,
      body,
      "videoUrl": video.asset -> url
    }
  `))

  if (!project) {
    ctx.res.writeHead(302, { Location: '/404' })
    ctx.res.end()
  }

  return project
}

export default PageProject