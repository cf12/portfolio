import React from 'react'
import { NextSeo } from 'next-seo'
import { Link, Element } from 'react-scroll'

import {
  IoLogoCodepen,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
} from 'react-icons/io'

import {
  FaChevronDown,
} from 'react-icons/fa'

import Nav from 'components/Nav'
import Footer from 'components/Footer'
import ToTopButton from 'components/ToTopButton'
import BackgroundShapes from 'components/BackgroundShapes'
import Button from 'components/Button'
import Project from 'components/Project'

import projects from 'assets/projects/projects.json'

import styles from './index.scss'

class Home extends React.Component {
  render () {
    return (
      <>
        <NextSeo
          title="CF12's Portfolio | Home"
          description="Welcome to my portfolio! Here, you can find some of the cool stuff I've built, as well as learn more about me and my hobbies"
        />

        <Nav />
        <ToTopButton />

        <main className={styles.body}>
          <div className={styles.hero}>
            <BackgroundShapes />

            <div className={styles.container}>
              <h1 className={styles.title}>
                Hey! I'm <mark>Brian</mark>.
              </h1>

              <div className={styles.subtitle}>
                <p>I'm a novice <mark>programmer</mark>,</p>
                <p>aspiring <mark>web developer</mark>,</p>
                <p>and <mark>cyber security</mark> enthusiast.</p>
              </div>

              <div className={styles.buttons}>
                <Button
                  href='https://cf12.github.io/resume/public/resume.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  text='My Resume'
                  icon='FaFileAlt'
                />

                <Button
                  href='mailto:brian@cf12.org'
                  text='Send me an Email'
                  icon='FaEnvelope'
                />
              </div>
            </div>

            <div className={styles.sideButtons}>
              <a href='https://github.com/cf12/'>
                <IoLogoGithub />
              </a>

              <a href='https://codepen.io/CF12/'>
                <IoLogoCodepen />
              </a>

              <a href='https://twitter.com/CF12__/'>
                <IoLogoTwitter />
              </a>

              <a href="https://www.linkedin.com/in/brian-x-23334b189/">
                <IoLogoLinkedin />
              </a>
            </div>

            <Link
              to='about'
              duration={300}
              smooth>
              <FaChevronDown className={styles.downchev} />
            </Link>
          </div>

          <Element name='about' />
          <div className={styles.about}>
            <h5 className={styles.titleLabel}>#01</h5>
            <h1 className={styles.title}>ABOUT ME</h1>


            <div className={styles.container}>
              <div className={styles.text}>
                <p>
                  Hi! My name is Brian Xiang - I'm an amateur web developer
                  and cybersecurity enthusiast, who's experienced in modern
                  frontend / backend web development.
                </p>
                <br />
                <p>
                  Throughout the years, I've learned and developed with many technologies,
                  including HTML, CSS, JS, Python, Java, Golang, C, C++, ReactJS, NodeJS, as well as
                  managed linux systems and servers.
                </p>
              </div>

              <div className={styles.img} />
            </div>
          </div>

          <Element name='projects' />
          <div className={styles.projects}>
            <h5 className={styles.titleLabel}>#02</h5>
            <h1 className={styles.title}>MY WORK</h1>

            <div className={styles.projectItems}>
              {
                Object.keys(projects).map((key) => {
                  return <Project name={key} key={key} />
                })
              }
            </div>
          </div>

          <Element name='contact' />
          <div className={styles.contact}>
            <h5 className={styles.titleLabel}>#03</h5>
            <h1 className={styles.title}>CONTACT ME</h1>

            <div className={styles.text}>
              <p>If you have any questions, business inquiries, or just wanna chat with me, you can find me on any of the following:</p>

              <div className={styles.buttons}>
                <Button
                  href='mailto:brian@cf12.org'
                  text='brian@cf12.org'
                  icon='FaEnvelope'
                />

                <Button
                  href='https://github.com/cf12'
                  text='github.com/cf12'
                  icon='FaGithub'
                />

                <Button
                  href=''
                  text='CF12#1240'
                  icon='FaDiscord'
                />
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </>
    )
  }
}

export default Home
