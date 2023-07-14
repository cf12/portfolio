/* eslint-disable react/no-unescaped-entities */

import { NextSeo } from "next-seo"
import React from "react"

import Button from "components/Button"
import Layout from "components/Layout"

import styles from "./index.module.scss"
import { IoDocument, IoDocumentText, IoDocumentTextOutline, IoFolder, IoFolderOpen, IoMailOpen } from "react-icons/io5"

const Home = () => {
  return (
    <Layout>
      <NextSeo
        title="cf12.org - About"
        description="Welcome to my portfolio! Here, you can find some of the cool stuff I've built, as well as learn more about myself & my hobbies."
      />

      <div className={styles.container}>
        <h1 className={styles.title}>
          hey! i'm <mark>brian</mark>.
        </h1>

        <p className={styles.text}>
          i'm a <mark>software engineer</mark> and <mark>cybersecurity enthusiast</mark> currently studying <mark>computer science</mark> at the <a href="https://www.umd.edu/">university of maryland</a>.
        </p>

        <p className={styles.text}>
          when i'm not coding, i'm usually watching <a href="https://anilist.co/user/cf12/">anime</a>, jamming to <a href="https://open.spotify.com/playlist/7frviDPCNXW25BOwGZJcy7?si=e168da17e9a24852">j-pop</a>, or competing in <a href="https://ctftime.org/team/45894">ctfs</a> — sometimes all at once ¯\_(ツ)_/¯
        </p>

        <p className={styles.text}>
          questions / business inquiries / curious about what i had for breakfast? feel free to shoot me <a href="mailto:brian@cf12.org">an email</a>.
        </p>

        <div className={styles.buttons}>
          <Button
            href="/projects"
            text="my projects"
            icon={<IoFolderOpen />}
          />

          <Button
            href="https://cf12.github.io/resume/resume.pdf"
            text="my resume"
            icon={<IoDocumentText />}
          />

          <Button
            href="mailto:brian@cf12.org"
            text="my email"
            icon={<IoMailOpen />}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Home
