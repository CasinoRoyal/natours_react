import { ReducerStateType } from '../store/types';
import { 
  UserDataState, 
  UserActionsType,
  FILL_USER,
  CLEAR_USER,
  FETCH_USER_FAILURE,
  UPDATE_USER_DATA_START,
  UPDATE_USER_DATA_SUCCESS,
  UPDATE_USER_DATA_FAILURE
} from './types';

const initialState = {
  data: {
    user: null
  },
  isFetching: false,
  error: false
}

export const userReducer = (
  state = initialState,
  action: UserActionsType
  ): ReducerStateType<UserDataState> => {

  switch (action.type) {
    case UPDATE_USER_DATA_START:
      return {
        ...state,
        isFetching: true,
        error: false
      };

    case FILL_USER:
    case UPDATE_USER_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: false,
        data: {
          user: action.payload
        }
      };

    case FETCH_USER_FAILURE:
    case UPDATE_USER_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };

    case CLEAR_USER:
      return {
        ...state,
        isFetching: false,
        error: false,
        data: {
          user: null
        }
      };
     
    default:
      return state;
  }
};