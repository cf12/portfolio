import React from 'react'
import Link from 'next/link'

const MyLink = (({ href, ...props }) => (
  <Link href={href}>
    <a {...props}>
      {props.children}
    </a>
  </Link>
))

export default MyLink