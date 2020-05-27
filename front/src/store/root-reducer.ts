import { combineReducers } from 'redux';

import { tourReducer as tours } from '../tours/tour-reducer';
import { userReducer as user } from '../user/user-reducer';

export const reducer = combineReducers({
  tours,
  user
});