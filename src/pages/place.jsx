import React from "react"
import { NextSeo } from "next-seo"

import Layout from "components/Layout"

import styles from "./place.module.scss"

const Fun = () => {
  return (
    <Layout>
      <NextSeo title="TODO" description="TODO" />

      <div className={styles.container}>
        <h4 className={styles.subtitle}>{'// PLACE'}</h4>

        <div className={styles.blocks}>
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </Layout>
  )
}

export default Fun
