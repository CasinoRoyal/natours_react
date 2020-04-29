import React, { FC, ReactElement } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { MainPage } from './pages/main';
import { TourPage } from './pages/tour';

export const AppRouter: FC = (): ReactElement => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/:tour' component={TourPage} />
      </Switch>
    </Router>
  )
}