import React, { useState } from 'react'
import { Link } from 'react-scroll'

import {
  FaBars,
  FaTimes
} from 'react-icons/fa'

import styles from './Nav.module.scss'

const Button = ({ name, to, onClick }) => (
  <Link
    to={to}
    smooth
    duration={300}
    className={styles.button}
    onClick={onClick}
  >
    <p>{name}</p>
  </Link>
)

const NavBar = () => {
  const [ sidebar, setSidebar ] = useState(null)

  const toggle = () => setSidebar(!sidebar)

  return (
    <>
      <div
        className={styles.sidebar}
        style={{
          pointerEvents: sidebar ? 'all' : 'none',
          height: sidebar ? '100%' : '0%',
          opacity: sidebar ? 1 : 0
        }}
      >
        <FaTimes
          className={styles.sidebarCloseButton}
          onClick={toggle}
        />

        <div className={styles.sidebarButtons}>
          <Button name='ABOUT' to='about' onClick={toggle} />
          <Button name='PROJECTS' to='projects' onClick={toggle} />
          <Button name='CONTACT' to='contact' onClick={toggle} />
        </div>
      </div>

      <header className={styles.container}>
        <img
          className={styles.icon}
          src='/images/profile-pic.png'
          alt='Profile'
        />

        <FaBars
          className={styles.navbarButton}
          onClick={toggle}
        />

        <span className={styles.buttons}>
          <Button name='ABOUT' to='about' />
          <Button name='PROJECTS' to='projects' />
          <Button name='CONTACT' to='contact' />
        </span>
      </header>
    </>
  )
}

export default NavBar
