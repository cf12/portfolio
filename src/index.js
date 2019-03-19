import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import 'normalize.css'
import './index.scss'
import './styles/fonts.scss'
import './styles/flexbox.scss'

import PageHome from './pages/PageHome'
import Page404 from './pages/Page404'
import ProjectPage from './pages/Projects/ProjectPage.jsx'

import projectsData from 'assets/projects/projects.js'
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
          <Route exact path='/' component={PageHome} />

          { projects }

          <Route component={Page404} />
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.register()
