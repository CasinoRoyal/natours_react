import { 
  REQUEST_LOGIN,
  REQUEST_SIGNUP, 
  AUTH_SUCCESS, 
  AUTH_FAILURE,
  REQUEST_LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  FETCH_CHECK_AUTH_TOKEN,
  CHECK_AUTH_TOKEN_SUCCESS,
  CHECK_AUTH_TOKEN_FAILURE
} from './types';

const initState = {
  isRequested: false,
  isAuth: false,
  isFetching: false,
  error: ''
}

export type AuthStateType = typeof initState;

export const authReducer = (state = initState, action: any): AuthStateType => {
  switch (action.type) {
    case REQUEST_LOGOUT:
     return {
       ...state,
       isFetching: true
     };

    case LOGOUT_SUCCESS: 
      return {
        ...state,
        isFetching: false,
        isAuth: false
      }

    case REQUEST_LOGIN:
    case REQUEST_SIGNUP:
    case FETCH_CHECK_AUTH_TOKEN:
      return {
        ...state,
        isRequested: true,
        isFetching: true
      };

    case AUTH_SUCCESS:
    case CHECK_AUTH_TOKEN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        isFetching: false,
        error: ''
      };

    case AUTH_FAILURE:
    case LOGOUT_FAILURE:
    case CHECK_AUTH_TOKEN_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    
    default:
      return state;
  }
}