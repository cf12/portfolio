import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import 'normalize.css'
import './styles/global.scss'
import './styles/fonts.scss'
import './styles/flexbox.scss'

import PageHome from './pages/PageHome'
import Page404 from './pages/Page404'
import PageProject from './pages/PageProject'

import projectsData from 'assets/projects/projects.json'
let projects = []

for (const key of Object.keys(projectsData)) {
  projects.push(
    <Route
      key={key}
      path={`/projects/${key}`}
      component={() => <PageProject name={key} />}
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