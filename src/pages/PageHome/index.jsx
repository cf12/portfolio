import React from 'react'
import { Element } from 'react-scroll'

import NavBar from 'components/NavBar'
import Footer from 'components/Footer'
import ToTopButton from 'components/ToTopButton'

import Hero from './Hero'
import BodySectionAbout from './BodySectionAbout'
import BodySectionProjects from './BodySectionProjects'
import BodySectionResume from './BodySectionResume'
import BodySectionContact from './BodySectionContact'

import './index.scss'
class Home extends React.Component {
  render () {
    return (
      <>
        <NavBar />
        <ToTopButton />

        <main className='body flex-center flex-col'>
          <Hero />

          <Element name='about' />
          <BodySectionAbout />
          <Element name='projects' />
          <BodySectionProjects />
          <BodySectionResume />
          <Element name='contact' />
          <BodySectionContact />
        </main>

        <Footer />
      </>
    )
  }
}

export default Home
