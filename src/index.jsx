import React from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter,
  Route,
} from 'react-router-dom'

import './fonts/Muli/Muli-Regular.ttf'
import './fonts/Agent/Agent300.ttf'

import './index.css'
import PageMain from './PageMain'

ReactDOM.render((
  <HashRouter>
    <Route path="/" component={PageMain} />
  </HashRouter>
), document.getElementById('root'))
