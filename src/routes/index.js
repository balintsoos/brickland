import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from 'components/App'
import Main from 'components/Main'
import About from 'components/About'
import Projects from 'components/Projects'

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Main} />
      <Route path="about" component={About} />
      <Route path="projects" component={Projects} />
    </Route>
  </Router>
)

export default routes
