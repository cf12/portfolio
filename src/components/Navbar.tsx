/* eslint-disable @next/next/no-img-element */

import React, { MouseEventHandler, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

import { FaBars, FaTimes } from "react-icons/fa"

import styles from "./Navbar.module.scss"

const Button = ({ name, to, onClick }: {name: string, to: string, onClick?: MouseEventHandler}) => {
  const { pathname } = useRouter()

  return (
    <Link href={to}>
      <a className={styles.button + ' ' + (pathname === to ? styles.active : '')} onClick={onClick}>
        <p>{name}</p>
      </a>
    </Link>
  )
 }

const NavBar = () => {
  const [sidebar, setSidebar] = useState(false)

  const toggle = () => setSidebar(!sidebar)

  return (
    <>
      <div
        className={styles.sidebar}
        style={{
          pointerEvents: sidebar ? "all" : "none",
          height: sidebar ? "100%" : "0%",
          opacity: sidebar ? 1 : 0,
        }}
      >
        <FaTimes className={styles.sidebarCloseButton} onClick={toggle} />

        <div className={styles.sidebarButtons}>
          <Button name="ABOUT" to="/" onClick={toggle} />
          <Button name="PROJECTS" to="/projects" onClick={toggle} />
          <Button name="GUESTBOOK" to="/guestbook" />
        </div>
      </div>

      <header className={styles.container}>
        <Link href="/">
          <a>
            <img
              className={styles.icon}
              src="/images/profile.png"
              alt="Profile"
            />
          </a>
        </Link>

        <FaBars className={styles.navbarButton} onClick={toggle} />

        <span className={styles.buttons}>
          <Button name="ABOUT" to="/" />
          <Button name="GUESTBOOK" to="/guestbook" />
          <Button name="PROJECTS" to="/projects" />
        </span>
      </header>
    </>
  )
}

export default NavBar
