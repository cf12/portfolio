import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { render } from 'react-dom'

import 'modules/FontAwesomeIconLoader.jsx'

import 'normalize.css'
import './index.html'
import './styles/fonts.scss'
import './styles/flexbox.scss'

import Home from './scenes/Home/Home.jsx'
import NotFound from './scenes/NotFound/NotFound.jsx'
import ProjectPage from './scenes/Projects/ProjectPage.jsx'

const projectsData = require('assets/projects/projects.json')
let projects = []

for (const key of Object.keys(projectsData)) {
  projects.push(
    <Route
      key={key}
      path={`/projects/${key}`}
      component={() => <ProjectPage name={key} content={projectsData[key]} />}
    />
  )
}

class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />

          { projects }

          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

render(<App />, document.getElementById('app'))
