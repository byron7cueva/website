import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { WebSite } from './layouts/WebSite'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Opinions } from './pages/Opinions'

/**
 * Instance of application
 * @author byron7cueva
 */
export const App = () => (
  <BrowserRouter>
    <WebSite>
      <Switch>
        <Route path='/' exact component={Opinions} />
        <Route path='/about' exact component={About} />
        <Route path='/opinions' exact component={Home} />
      </Switch>
    </WebSite>
  </BrowserRouter>
)
