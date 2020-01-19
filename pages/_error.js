import React from 'react'
import Head from 'next/head'

import BackButton from 'components/BackButton'

import styles from './_error.scss'

export default class NotFound extends React.Component {

  render () {
    return (
      <>
        <Head>
          <title>CF12's Portfolio | 404 Not Found</title>
          <meta
            name="description"
            content="404 - This page could not be found."
          />
        </Head>

        <div className={styles.container}>
          <BackButton className={styles.button} />

          <img
            className={styles.icon}
            src={require(`assets/images/404.png`)}
            alt=''
          />

          <h1 className={styles.title}>NOT FOUND</h1>
          <p className={styles.message}>
            It’s out there somewhere...
          </p>

          <div className={styles.bl}>
            Icon made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
          </div>
        </div>
      </>
    )
  }
}
