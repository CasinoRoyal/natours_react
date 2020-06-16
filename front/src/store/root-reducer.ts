import { combineReducers } from 'redux';

import { tourReducer as tours } from '../tours/tour-reducer';
import { userReducer as user } from '../user/user-reducer';
import { authReducer as auth, AuthStateType } from '../auth/auth-reducer';
import { ReducerStateType } from './types';

type ReducersType = {
  tours: ReducerStateType<any>;
  user: ReducerStateType<any>;
  auth: AuthStateType;
}

export const reducer = combineReducers<ReducersType>({
  tours,
  user,
  auth
});