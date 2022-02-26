import React from "react"
import { NextSeo } from "next-seo"

import styles from "./404.module.scss"
import Layout from "components/Layout"
export default class NotFound extends React.Component {
  render() {
    return (
      <Layout>
        <NextSeo
          title="404 Not Found"
          description="The page you've requested doesn't exist."
        />

        <div className={styles.container}>
          <img className={styles.icon} src="/images/404.png" alt="" />

          <h1 className={styles.title}>NOT FOUND</h1>
          <p className={styles.message}>It’s out there somewhere...</p>
        </div>
      </Layout>
    )
  }
}
