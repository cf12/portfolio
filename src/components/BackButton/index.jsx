import React from 'react'
import { Link } from 'react-router-dom'

import { FaArrowLeft } from 'react-icons/fa'

import styles from './index.module.scss'

const BackButton = (props) => (
  <div className={styles.container + ' ' + props.className}>
    <Link to='/' className={styles.button}>
      <FaArrowLeft size='24px' />
      <h3>BACK</h3>
    </Link>
  </div>
)

export default BackButton
