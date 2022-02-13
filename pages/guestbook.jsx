import React from "react"
import { NextSeo } from "next-seo"

import Layout from "components/Layout"

import styles from "./guestbook.module.scss"

const Fun = () => {
  return (
    <Layout>
      <NextSeo title="TODO" description="TODO" />

      <div className={styles.container}>
        <h4 className={styles.subtitle}>{"// GUESTBOOK"}</h4>

        <p>
          Got something to share with the world? Feel free to immortalize it
          here!
        </p>

        <form name="guestbook" method="POST" data-netlify="true">
          <label>
            First Name: <input type="text" name="first_name" />
          </label>

          <label>
            Last Name: <input type="text" name="last_naem" />
          </label>

          <label>
            Message: <textarea name="message"></textarea>
          </label>

          <button type="submit">Send</button>
        </form>
      </div>
    </Layout>
  )
}

export default Fun
