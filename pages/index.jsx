/* eslint-disable react/no-unescaped-entities */

import { NextSeo } from "next-seo"
import React from "react"

import Button from "components/Button"
import Layout from "components/Layout"

import styles from "./index.module.scss"

const Home = () => {
  return (
    <Layout>
      <NextSeo
        title="cf12.org - About"
        description="Welcome to my portfolio! Here, you can find some of the cool stuff I've built, as well as learn more about myself & my hobbies."
      />

      <div className={styles.container}>
        <h1 className={styles.title}>
          Hey! I'm <mark>Brian</mark>.
        </h1>

        <p className={styles.text}>
          I'm a <mark>software engineer</mark> and <mark>cybersecurity enthusiast</mark> currently studying <mark>computer science</mark> at the <a href="https://www.umd.edu/">University of Maryland</a>.
        </p>

        <p className={styles.text}>
          When I'm not coding, I'm usually watching <a href="https://anilist.co/user/cf12/">anime</a>, jamming to <a href="https://open.spotify.com/playlist/7frviDPCNXW25BOwGZJcy7?si=e168da17e9a24852">J-Pop</a>, or competing in <a href="https://ctftime.org/team/45894">CTFs</a> — sometimes all at once ¯\_(ツ)_/¯
        </p>

        <p className={styles.text}>
          Questions / business inquiries / curious about what I had for breakfast? Feel free to shoot me <a href="mailto:brian@cf12.org">an email</a>.
        </p>

        <div className={styles.buttons}>
          <Button
            href="https://cf12.github.io/resume/public/resume_min.pdf"
            target="_blank"
            rel="noopener noreferrer"
            text="View Resume"
            icon="IoDocument"
          />

          <Button
            href="mailto:brian@cf12.org"
            text="brian@cf12.org"
            icon="IoMail"
          />
        </div>
      </div>
    </Layout>
  )
}

export default Home
