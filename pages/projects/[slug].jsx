import React, { useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import { NextSeo } from 'next-seo'
import { getProject, getProjectSlugs } from 'libs/projects'

import BackButton from 'components/BackButton'
import VideoPlayer from 'components/VideoPlayer'
import ToTopButton from 'components/ToTopButton'
import Footer from 'components/Footer'

import styles from './[slug].module.scss'

// TODO: Add SEO description in frontmatter
const PageProject = ({ content, data: { title }, video }) => {
  return (
    <>
      <NextSeo
        title={`CF12.org - ${title}`}
        description={content.substring(0, 150)}
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
            src={video}
          />
        </div>

        <ReactMarkdown source={content} className={styles.content} />

        <ToTopButton />
        <Footer />
      </div>
    </>
  )
}

export async function getStaticProps ({ params: { slug }}) {
  const project = getProject(slug)

  return { props: project }
}

export async function getStaticPaths () {
  const paths = getProjectSlugs().map((slug) => {
    return {
      params: {
        slug,
      },
    }
  })

  return {
    paths,
    fallback: false
  }
}


export default PageProject