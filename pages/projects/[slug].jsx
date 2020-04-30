import React, { useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import { NextSeo } from 'next-seo'
import * as matter from 'gray-matter';

import BackButton from 'components/BackButton'
import VideoPlayer from 'components/VideoPlayer'
import ToTopButton from 'components/ToTopButton'
import Footer from 'components/Footer'

import styles from './[slug].scss'

// TODO: Make a more sensible project description for SEO based on frontmatter
const PageProject = ({ slug, title, data }) => {
  return (
    <>
      <NextSeo
        title={`CF12.org - ${title}`}
        description={data.substring(0, 150)}
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
            src={require(`assets/projects/${slug}/video.webm`)}
            overlay
          />
        </div>

        <div className={styles.content}>
          <ReactMarkdown source={data} />
        </div>

        <ToTopButton />
        <Footer />
      </div>
    </>
  )
}

// PageProject.getInitialProps = async (context) => {
//   const { slug } = context.query

//   if (!(slug in projects)) {
//     context.res.writeHead(302, { Location: '/404' })
//     context.res.end()
//   }

//   return {
//     slug: slug,
//     title: projects[slug].title,
//     data: await import(`assets/projects/${slug}/body.md`)
//   }
// }

PageProject.getInitialProps = async (nextContext) => {
  const { slug } = nextContext.query

  const context = require.context('assets/projects', true, /\.md$/)

  const keys = context.keys()
  const values = keys.map(context)

  const projects = keys.map((key, index) => {
    const value = values[index]

    const document = matter(value.default)

    return document.data.slug
  })

  if (!projects.includes(slug)) {
    nextContext.res.writeHead(302, { Location: '/404' })
    nextContext.res.end()
  }

  const md = matter((await import(`assets/projects/${slug}/index.md`)).default)

  return {
    slug: md.data.slug,
    title: md.data.title,
    data: md.content
  }
}

export default PageProject