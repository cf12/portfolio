import React from 'react'

import './Home.scss'

import NavBar from '../../components/NavBar/NavBar.jsx'
import Footer from '../../components/Footer/Footer.jsx'

import Showcase from './Showcase/Showcase.jsx'
import BodySectionStory from './BodySectionStory/BodySectionStory.jsx'
import BodySectionSkills from './BodySectionSkills/BodySectionSkills.jsx'
import BodySectionProjects from './BodySectionProjects/BodySectionProjects.jsx'

export default class Home extends React.Component {
  render () {
    return (
      <div>
        {/* <NavBar /> */}
        <Showcase />

        <div className='body flex--center flex--column'>
          <BodySectionStory />
          <BodySectionSkills />
          <BodySectionProjects />
        </div>

        <Footer />
      </div>
    )
  }
}
