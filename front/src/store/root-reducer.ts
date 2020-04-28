import { combineReducers } from 'redux';

import { tourReducer as tours } from '../tours/tour-reducer';

export const reducer = combineReducers({
  tours
});