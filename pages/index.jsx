import React from "react"
import { NextSeo } from "next-seo"

import {
  IoLogoCodepen,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
} from "react-icons/io"

import { FaChevronDown } from "react-icons/fa"

import ToTopButton from "components/ToTopButton"
import Button from "components/Button"
import Layout from "components/Layout"

import styles from "./index.module.scss"

const Home = ({ projects }) => {
  return (
    <Layout>
      <NextSeo
        title="CF12.org - Web Developer Portfolio"
        description="Welcome to my portfolio! Here, you can find some of the cool stuff I've built, as well as learn more about myself & my hobbies."
      />

      <ToTopButton />

      <div className={styles.container}>
        <h1 className={styles.title}>
          Hey! I'm <mark>Brian</mark>.
        </h1>

        <p className={styles.subtitle}>
          I'm a <mark>software engineer</mark> / <mark>web developer</mark> / <mark>cybersecurity enthusiast</mark> currently studying computer science at the <u>University of Maryland</u>. My hobbies include watching <u>anime</u>, listening to <u>J-Pop</u>, and <u>drifting through life aimlessly</u>.
        </p>

        <p className={styles.subtitle}>
          Check out some of the fun stuff I'm working on!
        </p>

        <div className={styles.buttons}>
          <Button
            href="https://cf12.github.io/resume/public/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            text="My Resume"
            icon="FaFileAlt"
          />

          <Button
            href="mailto:brian@cf12.org"
            text="My Email"
            icon="FaEnvelope"
          />
        </div>
      </div>
    </Layout>
  )
}

export default Home
