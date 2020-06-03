import React, { FC, ReactElement } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { PrivateRoute } from './private-route';
import { MainPage } from '../pages/main';
import { TourPage } from '../pages/tour';
import { AuthPage } from '../pages/auth';
import { Header } from '../shareable/ui/header';
import { Footer } from '../shareable/ui/footer';
import { NotFound } from '../shareable/ui/not-found';

const Secret = () => {
  return <div>Hello, stranger</div>
}

export const AppRouter: FC = (): ReactElement => {
  return (
    <Router>
      <Header />
      
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/tour/:tourId' component={TourPage} />
        <Route exact path='/auth/:methodAuth' component={AuthPage} />
        <PrivateRoute exact path='/secret' component={Secret} />
        <Route path='*' component={NotFound} />
      </Switch> 

      <Footer />
    </Router>
  );
}