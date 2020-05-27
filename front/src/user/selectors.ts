import { createSelector, Selector } from 'reselect';

import { UserDataState } from './types';
import { ReducerStateType } from '../shareable/types';
import { AppStore } from '../store/store';


const getUserData: Selector<AppStore, ReducerStateType<UserDataState>> = (state) => state.user;

export const selectUserData = createSelector(
  getUserData,
  (userData) => ({ 
    data: userData.data.user,
    isFetching: userData.isFetching,
    error: userData.error
  })
);