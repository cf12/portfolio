import React from 'react'

import {
  IoLogoCodepen,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin
} from 'react-icons/io'

import styles from './Footer.module.scss'

export default class Footer extends React.Component {
  render () {
    return (
      <footer className={styles.footer}>
        <img
          className={styles.logo}
          src='/images/profile-pic.png'
          alt='Logo'
        />

        <div>
          <p className={styles.text}>
            Made with &lt;3 and coffee
          </p>

          <div className={styles.icons}>
            <a href='https://github.com/cf12/'>
              <IoLogoGithub />
            </a>

            <a href='https://codepen.io/CF12/'>
              <IoLogoCodepen />
            </a>

            <a href='https://twitter.com/CF12__/'>
              <IoLogoTwitter />
            </a>

            <a href="https://www.linkedin.com/in/brian-x-23334b189/">
              <IoLogoLinkedin />
            </a>
          </div>
        </div>

        <div className={styles.spacer} />

        <p className={styles.text}>Copyright © 2021 - All Rights Reserved </p>
      </footer>
    )
  }
}
