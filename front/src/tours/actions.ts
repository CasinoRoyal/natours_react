import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

import { api } from '../http/api';
import { appStore } from '../store/store';
import { 
  ToursActionTypes,
  CurrentTourActionTypes,
  FETCH_TOURS_START,
  FETCH_TOURS_SUCCESS,
  FETCH_TOURS_FAILURE,
  FETCH_CURRENT_TOUR_START,
  FETCH_CURRENT_TOUR_SUCCESS,
  FETCH_CURRENT_TOUR_FAILURE,
  Tours,
  CurrentTour
} from './types';

// TOURS actions
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

type FetchToursResponseType = {
  docs: Tours
}

export function fetchToursAsync(): ThunkAction<void, appStore, unknown, Action<string>> {
  return async (dispatch, getState) => {
    dispatch(fetchToursStart());
    
    try {
      const options = {
        method: 'GET',
        endPoint: 'tours'
      }
      const res: FetchToursResponseType = await api.request<FetchToursResponseType>(options);
      console.log(res);
      dispatch(fetchToursSuccess(res.docs));
    } catch(err) {
        dispatch(fetchToursFailure(err.message));
    }

  }
}

// Current TOUR actions
export function fetchCurrentTourStart(): CurrentTourActionTypes {
  return {
    type: FETCH_CURRENT_TOUR_START
  };
}

export function fetchCurrentTourSuccess(payload: CurrentTour): CurrentTourActionTypes {
  return {
    type: FETCH_CURRENT_TOUR_SUCCESS,
    payload
  };
}

export function fetchCurrentTourFailure(payload: string): CurrentTourActionTypes {
  return {
    type: FETCH_CURRENT_TOUR_FAILURE,
    payload //   !! Check the tour reducer logic about error handeling !!
  };
}

type FetchCurrentTourResponseType = {
  doc: CurrentTour
}

export function fetchCurrentTourAsync(id: string): ThunkAction<void, appStore, unknown, Action<string>> {
  return async (dispatch, getState) => {
    dispatch(fetchCurrentTourStart());
    
    try {
      const options = {
        method: 'GET',
        endPoint: `tours/${id}`
      }
      const res: FetchCurrentTourResponseType = await api.request<FetchCurrentTourResponseType>(options);
      dispatch(fetchCurrentTourSuccess(res.doc));
    } catch(err) {
        dispatch(fetchCurrentTourFailure(err.message));
    }

  }
}