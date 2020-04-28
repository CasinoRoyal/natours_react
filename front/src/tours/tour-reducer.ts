import { 
  ToursActionTypes, 
  Tours,
  FETCH_TOURS_START,
  FETCH_TOURS_SUCCESS,
  FETCH_TOURS_FAILURE
} from './types';

export type TourState = {
  data: Tours;
  isFetching: boolean;
  error: boolean;
}

const initialState = {
  data: [],
  isFetching: false,
  error: false
}

// type TourState = typeof initialState

export const tourReducer = (
  state = initialState, 
  action: ToursActionTypes
): TourState => {
  switch (action.type) {
    case FETCH_TOURS_START: 
      return {
        ...state,
        isFetching: true
      }
    case FETCH_TOURS_SUCCESS: 
      return {
        ...state,
        isFetching: false,
        data: action.payload
      };
    case FETCH_TOURS_FAILURE:
     return {
       ...state,
       isFetching: false,
       error: true
     };
    default:
      return state;
  }
}