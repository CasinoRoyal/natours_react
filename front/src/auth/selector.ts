import { createSelector, Selector } from 'reselect';

import { AuthStateType } from './auth-reducer';
import { AppStore } from '../store/store';

const getAuthSelector: Selector<AppStore, AuthStateType> = (state) => state.auth;

export const AuthStateSelector = createSelector(
  getAuthSelector,
  (auth) => auth
);
