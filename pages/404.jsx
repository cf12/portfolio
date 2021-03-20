import React from 'react'
import { NextSeo } from 'next-seo'

import BackButton from 'components/BackButton'

import styles from './404.module.scss'

export default class NotFound extends React.Component {

  render () {
    return (
      <>
        <NextSeo
          title="CF12.org - 404 Not Found"
          description="404 - Not Found"
        />

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
