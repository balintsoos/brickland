import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import App from '../components/App'
import About from '../components/About'

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
  </Router>
)

export default routes
