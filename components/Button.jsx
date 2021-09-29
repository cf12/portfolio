import React from 'react'

import * as icons from 'react-icons/io5'
import {
  FaArrowRight,
  FaBeer
} from 'react-icons/fa'

import styles from './Button.module.scss'

const Button = ({ text, icon, href, target, rel }) => {
  const Icon = icons[icon] || FaBeer
  const children =
    <>
      <Icon />
      <p>{text}</p>
      <FaArrowRight />
    </>

  if (href) {
    return (
      <a
        className={styles.container}
        href={href}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    )
  } else {
    return (
      <div className={styles.container}>
        {children}
      </div>
    )
  }
}

export default Button
