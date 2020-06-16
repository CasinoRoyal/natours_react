import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { RoutePropsType } from './app-router';
import { useAuth } from '../auth/hooks/use-auth';

export const PrivateRoute: FC<RoutePropsType> = (props) => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Redirect to='/auth/login' />
  }

  return <Route {...props} />
}