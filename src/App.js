import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { WebSite } from './layouts/WebSite'
import { Home } from './pages/Home'
import { About } from './pages/About'

/**
 * Instance of application
 * @author byron7cueva
 */
export const App = () => (
  <BrowserRouter>
    <WebSite>
      <Switch>
        <Route path='/' exact component={About} />
        <Route path='/about' exact component={Home} />
      </Switch>
    </WebSite>
  </BrowserRouter>
)
