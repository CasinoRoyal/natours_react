import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import axios, { AxiosResponse } from 'axios';

import { appStore } from '../store/store';
import { 
  ToursActionTypes,
  FETCH_TOURS_START,
  FETCH_TOURS_SUCCESS,
  FETCH_TOURS_FAILURE,
  Tours
} from './types';

type toursFetchResponse = {
  data: {
    docs: Tours
  }
}

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
  return async (dispatch) => {
    dispatch(fetchToursStart());
    
    try {
      const res: AxiosResponse<toursFetchResponse> = await axios
        .get(`https://natours-adventure.herokuapp.com/api/v1/tours`);
      
      dispatch(fetchToursSuccess(res.data.data.docs));
    } catch(err) {
        dispatch(fetchToursFailure(err.message));
    }

  }
}