import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

import { request } from '../api';
import { appStore } from '../store/store';
import { 
  ToursActionTypes,
  FETCH_TOURS_START,
  FETCH_TOURS_SUCCESS,
  FETCH_TOURS_FAILURE,
  Tours
} from './types';

export function fetchToursStart(): ToursActionTypes {
  return {
    type: FETCH_TOURS_START
  };
}

export function fetchToursSuccess(payload: Tours): ToursActionTypes {
  return {
    type: FETCH_TOURS_SUCCESS,
    payload
  };
}

export function fetchToursFailure(payload: string): ToursActionTypes {
  return {
    type: FETCH_TOURS_FAILURE,
    payload //   !! Check the tour reducer logic about error handeling !!
  };
}

export function fetchToursAsync(): ThunkAction<void, appStore, unknown, Action<string>> {
  return async (dispatch, getState) => {
    console.log(getState());
    dispatch(fetchToursStart());
    
    try {
      const res: Tours = await request.get<Tours>('tours')
      dispatch(fetchToursSuccess(res));
    } catch(err) {
        dispatch(fetchToursFailure(err.message));
    }

  }
}