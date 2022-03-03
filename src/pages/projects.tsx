/* eslint-disable @next/next/no-img-element */

import React from "react"
import { NextSeo } from "next-seo"

import { getProjects, Project } from "libs/projects"
import { IoLogoGithub } from 'react-icons/io'

import Layout from "components/Layout"
import Button from "components/Button"

import styles from "./projects.module.scss"

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <Layout>
      <NextSeo
        title="cf12.org - Projects"
        description="A list of projects I'm currently working / have previously worked on."
      />

      <div className={styles.container}>
        <h4 className={styles.subtitle}>{'// PROJECTS'}</h4>

        <div className={styles.projects}>
          {projects.map(
            ({ slug, thumbnail, title, description, link, tags }) => (
              <a className={styles.project} href={link} key={slug}>
                <div className={styles.thumbnail}>
                  <img src={thumbnail} alt="" />
                  <div />
                </div>

                <div className={styles.right}>
                  <h2>{title}</h2>

                  <div className={styles.tags}>
                    {tags.map((tag, i) => (
                      <span className={styles.tag} key={i}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p>{description}</p>
                </div>
              </a>
            )
          )}
        </div>

        <Button
          href="https://github.com/cf12/"
          text="More Projects"
          icon={<IoLogoGithub />}
        />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      projects: await getProjects(),
    },
  }
}

export default Projects
