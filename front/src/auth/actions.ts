import { ThunkAction } from 'redux-thunk';

import { 
  AuthFormData,
  AuthTypesActions,
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
import { AppStore } from '../store/store';
import { RequestOptionsType } from '../http/http';
import { api } from '../http/api';
import { User, UserActionsType } from '../user/types';
import { fillUser, clearUser } from '../user/actions';

function requestLogin(): AuthTypesActions {
  return {
    type: REQUEST_LOGIN
  }
};

function requestSignup(): AuthTypesActions {
  return {
    type: REQUEST_SIGNUP
  }
};

function authSuccess(): AuthTypesActions {
  return {
    type: AUTH_SUCCESS
  }
};

function authFailure(payload: string): AuthTypesActions {
  return {
    type: AUTH_FAILURE,
    payload
  }
};

export function fetchAuthAsync(
    data:AuthFormData, 
    methodAuth:string
): ThunkAction<void, AppStore, unknown, AuthTypesActions | UserActionsType> {
  return async (dispatch) => {
    const requestOptions: RequestOptionsType = {
      method: 'POST',
      endPoint: '',
      data: {}
    };

    if (methodAuth ==='signup') {
      dispatch(requestSignup());
      requestOptions.endPoint = 'users/signup';
      requestOptions.data = data;
    } else {
        dispatch(requestLogin());
        requestOptions.endPoint = 'users/login';
        requestOptions.data = data;
    }

    try {
      const res: { user: User } = await api.request(requestOptions);
      dispatch(authSuccess());
      dispatch(fillUser(res.user));
    } catch(err) {
        const errMsg = err.response?.data?.message;
        dispatch(authFailure(errMsg));
    };
  }  
};


// LOGOUT ACTIONS

function requestLogout(): AuthTypesActions {
  return {
    type: REQUEST_LOGOUT
  }
};

function logoutSuccess(): AuthTypesActions {
  return {
    type: LOGOUT_SUCCESS
  }
};

function logoutFailure(payload: string): AuthTypesActions {
  return {
    type: LOGOUT_FAILURE,
    payload
  }
};

export function fetchLogoutAsync(): ThunkAction<void, AppStore, unknown, AuthTypesActions | UserActionsType> {
  return async(dispatch) => {
    dispatch(requestLogout());

    try {
      const options = {
        method: 'GET',
        endPoint: 'users/logout',
      }

      await api.request(options);
      dispatch(logoutSuccess());
      dispatch(clearUser());
    } catch (err) {
        const errMsg = err.response?.data?.message;
        dispatch(logoutFailure(errMsg));
    }
  }
};

// CHECK AUTH TOKEN

function fetchCheckAuthToken(): AuthTypesActions {
  return {
    type: FETCH_CHECK_AUTH_TOKEN
  }
};

function checkAuthTokenSuccess(): AuthTypesActions {
  return {
    type: CHECK_AUTH_TOKEN_SUCCESS
  }
};

function checkAuthTokenFailure(payload: string): AuthTypesActions {
  return {
    type: CHECK_AUTH_TOKEN_FAILURE,
    payload
  }
};

export function checkAuthTokenAsync(): ThunkAction<void, AppStore, unknown, AuthTypesActions | UserActionsType> {
  return async (dispatch, getState) => {
    const state = getState();

    if (state.auth.isFetching) return;

    dispatch(fetchCheckAuthToken());

    const options = {
      method: 'GET',
      endPoint: 'users/check-auth'
    }

    try {
      const res: { user: User } = await api.request(options);
      dispatch(checkAuthTokenSuccess());
      dispatch(fillUser(res.user));

    } catch(err) {
        const errMsg = err.response?.data?.message;
        dispatch(checkAuthTokenFailure(errMsg));
    }
  }
};