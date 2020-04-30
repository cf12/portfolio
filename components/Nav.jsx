import React, { useState } from 'react'
import { Link } from 'react-scroll'

import {
  FaBars,
  FaTimes
} from 'react-icons/fa'

import styles from './Nav.scss'

const Button = ({ name, to }) => (
  <Link
    to={to}
    smooth
    duration={300}
    className={styles.button}>

    <p>{name}</p>
  </Link>
)

const NavBar = () => {
  const [ sidebar, setSidebar ] = useState(null)

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
          onClick={() => setSidebar(!sidebar)}
        />

        <span className={styles.sidebarButtons}>
          <Button name='ABOUT' linkTo='about' />
          <Button name='PROJECTS' linkTo='projects' />
          <Button name='CONTACT' linkTo='contact' />
        </span>
      </div>

      <header className={styles.container}>
        <img
          className={styles.icon}
          src={require('assets/images/profile-pic.png')}
          alt='Profile'
        />

        <FaBars
          className={styles.navbarButton}
          onClick={() => setSidebar(!sidebar)}
        />

        <span className={styles.buttons}>
          <Button name='ABOUT' linkTo='about' />
          <Button name='PROJECTS' linkTo='projects' />
          <Button name='CONTACT' linkTo='contact' />
        </span>
      </header>
    </>
  )
}

export default NavBar
