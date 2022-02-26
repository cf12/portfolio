import React from "react"
import { NextSeo } from "next-seo"
import useSWR from 'swr'

import Layout from "components/Layout"

import styles from "./guestbook.module.scss"

const fetcher = async url => {
  const res = await fetch(url)

  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.')
    throw error
  }

  return res.json()
}

const Fun = () => {
  const { data, error } = useSWR('/.netlify/functions/guestbook', fetcher)

  return (
    <Layout>
      <NextSeo title="TODO" description="TODO" />

      <div className={styles.container}>
        <h4 className={styles.subtitle}>{"// GUESTBOOK"}</h4>

        <p>
          Got something to share with the world? Feel free to immortalize it
          here!
        </p>

        <form
          name="guestbook"
          method="POST"
          data-netlify="true"
          netlify-honeypot="sheesh"
          action="guestbook?success=true"
        >
          <input type="hidden" name="guestbook" />
          <label style={{ display: "none" }}>
            Don&apos;t fill this out if you&apos;re human: <input name="sheesh" />
          </label>
          <label>
            First Name: <input type="text" name="first_name" />
          </label>

          <label>
            Last Name: <input type="text" name="last_name" />
          </label>

          <label>
            Message: <textarea name="message"></textarea>
          </label>

          <button type="submit">Send</button>
        </form>

        {
          data ? data.map(({first_name, last_name, message}, i) => {
            return <div key={i}>
              <p>{first_name}, {last_name}</p>
              <p>{message}</p>

              </div>
          }) : (
            error ? 'error' : 'loading...'
          )
        } 
      </div>
    </Layout>
  )
}

export default Fun
