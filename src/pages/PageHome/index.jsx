import React from 'react'
import { Element } from 'react-scroll'

import NavBar from 'components/NavBar'
import Footer from 'components/Footer'
import ToTopButton from 'components/ToTopButton'

import Hero from './Hero'
import BodySectionAbout from './BodySectionAbout'
import BodySectionProjects from './BodySectionProjects'
import BodySectionContact from './BodySectionContact'

import withLoadingScreen from 'components/withLoadingScreen'

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
          <Element name='contact' />
          <BodySectionContact />
        </main>

        <Footer />
      </>
    )
  }
}

export default withLoadingScreen(Home)
