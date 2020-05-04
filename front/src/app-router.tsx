import React, { FC, ReactElement } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { MainPage } from './pages/main';
import { TourPage } from './pages/tour';
import { Header } from './shareable/ui/header';
import { Footer } from './shareable/ui/footer';

export const AppRouter: FC = (): ReactElement => {
  return (
    <Router>
      <Header />
      
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/:tourId' component={TourPage} />
      </Switch>

      <Footer />
    </Router>
  )
}