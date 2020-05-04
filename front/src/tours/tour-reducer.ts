import { 
  ToursActionTypes,
  CurrentTourActionTypes,
  Tours,
  CurrentTour,
  FETCH_TOURS_START,
  FETCH_TOURS_SUCCESS,
  FETCH_TOURS_FAILURE,
  FETCH_CURRENT_TOUR_START,
  FETCH_CURRENT_TOUR_SUCCESS,
  FETCH_CURRENT_TOUR_FAILURE
} from './types';

export type TourState = {
  data: {
    tours: Tours,
    currentTour: CurrentTour | null
  },
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
): TourState => {
  switch (action.type) {
    case FETCH_TOURS_START:
    case FETCH_CURRENT_TOUR_START:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_TOURS_SUCCESS: 
      return {
        ...state,
        isFetching: false,
        data: {
          ...state.data,
          tours: action.payload
        }
      };
    case FETCH_CURRENT_TOUR_SUCCESS: 
      return {
        ...state,
        isFetching: false,
        data: {
          ...state.data,
          currentTour: action.payload
        }
      }
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