import { ReducerStateType } from '../shareable/types';
import { 
  ToursActionTypes,
  CurrentTourActionTypes,
  ToursDataState,
  FETCH_TOURS_START,
  FETCH_TOURS_SUCCESS,
  FETCH_TOURS_FAILURE,
  FETCH_CURRENT_TOUR_START,
  FETCH_CURRENT_TOUR_SUCCESS,
  FETCH_CURRENT_TOUR_FAILURE
} from './types';

export type ToursState = {
  data: ToursDataState,
  isFetching: boolean;
  error: boolean;
}

const initialState = {
  data: {
    tours: [],
    currentTour: null
  },
  isFetching: false,
  error: false,
}

// type TourState = typeof initialState

export const tourReducer = (
  state = initialState, 
  action: ToursActionTypes | CurrentTourActionTypes
): ReducerStateType<ToursDataState> => {
  switch (action.type) {
    case FETCH_TOURS_START:
    case FETCH_CURRENT_TOUR_START:
      return {
        ...state,
        isFetching: true,
        error: false
      };
    case FETCH_TOURS_SUCCESS: 
      return {
        ...state,
        isFetching: false,
        error: false,
        data: {
          ...state.data,
          tours: action.payload
        }
      };
    case FETCH_CURRENT_TOUR_SUCCESS: 
      return {
        ...state,
        isFetching: false,
        error: false,
        data: {
          ...state.data,
          currentTour: action.payload
        }
      };
    case FETCH_TOURS_FAILURE:
    case FETCH_CURRENT_TOUR_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
       };
    default:
      return state;
  }
}