import React, { ReactElement } from "react"

import * as icons from "react-icons/io5"
import { FaArrowRight, FaBeer } from "react-icons/fa"

import styles from "./Button.module.scss"
import { IconType } from "react-icons"
import Link from "next/link"

const Button = ({
  text,
  icon,
  href,
  target,
  rel,
}: {
  text: string
  href: string
  icon?: ReactElement<IconType>
  target?: string
  rel?: string
}) => {
  const children = (
    <>
      {icon || <FaBeer />}
      <p>{text}</p>
      <FaArrowRight />
    </>
  )

  if (href) {
    return (
      <Link className={styles.container} href={href} target={target} rel={rel}>
        {children}
      </Link>
    )
  } else {
    return <div className={styles.container}>{children}</div>
  }
}

export default Button
