import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

import Link from 'components/Link'

import styles from './BackButton.scss'

const BackButton = (props) => (
  <div className={styles.container + ' ' + props.className}>
    <Link href='/' className={styles.button}>
      <FaArrowLeft size='24px' />
      <h3>BACK</h3>
    </Link>
  </div>
)

export default BackButton
