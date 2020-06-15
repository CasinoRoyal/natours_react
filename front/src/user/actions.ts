import { ThunkAction } from 'redux-thunk';

import { 
  User,
  UserActionsType,
  AuthFormData,
  REQUEST_LOGIN_USER,
  REQUEST_SIGNUP_USER, 
  FETCH_USER_SUCCESS, 
  FETCH_USER_FAILURE,
  CHECK_USER_START,
  CHECK_USER_SUCCESS,
  CHECK_USER_FAILURE,
  UPDATE_USER_DATA_START,
  UPDATE_USER_DATA_SUCCESS,
  UPDATE_USER_DATA_FAILURE,
  REQUEST_LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE
} from './types';
import { AppStore } from '../store/store';
import { api } from '../http/api';
import { RequestOptionsType } from '../http/http';


function requestLoginUser(): UserActionsType {
  return {
    type: REQUEST_LOGIN_USER
  }
};

function requestSignupUser(): UserActionsType {
  return {
    type: REQUEST_SIGNUP_USER
  }
};

function fetchUserSuccess(payload: User): UserActionsType {
  return {
    type: FETCH_USER_SUCCESS,
    payload
  }
};


function fetchUserFailure(payload: string): UserActionsType {
  return {
    type: FETCH_USER_FAILURE,
    payload
  }
};

function checkUserStart(): UserActionsType {
  return {
    type: CHECK_USER_START
  }
};

function checkUserSuccess(): UserActionsType {
  return {
    type: CHECK_USER_SUCCESS
  }
};

function checkUserFailure(): UserActionsType {
  return {
    type: CHECK_USER_FAILURE
  }
};

function updateUserDataStart(): UserActionsType {
  return {
    type: UPDATE_USER_DATA_START
  }
};

function updateUserDataSuccess(payload: User): UserActionsType {
  return {
    type: UPDATE_USER_DATA_SUCCESS,
    payload
  }
};

function updateUserDataFailure(payload: string): UserActionsType {
  return {
    type: UPDATE_USER_DATA_FAILURE,
    payload
  }
};

function requestLogoutUser(): UserActionsType {
  return {
    type: REQUEST_LOGOUT_USER
  }
}

function logoutUserSuccess(): UserActionsType {
  return {
    type: LOGOUT_USER_SUCCESS
  }
}

function logoutUserFailure(payload: string): UserActionsType {
  return {
    type: LOGOUT_USER_FAILURE,
    payload
  }
}

export function fetchUserAsync(data:AuthFormData, methodAuth:string): ThunkAction<void, AppStore, unknown, UserActionsType> {
  return async (dispatch) => {
    const requestOptions: RequestOptionsType = {
      method: 'POST',
      endPoint: '',
      data: {}
    };

    if (methodAuth ==='signup') {
      dispatch(requestSignupUser());
      requestOptions.endPoint = 'users/signup';
      requestOptions.data = data;
    } else {
      dispatch(requestLoginUser());
      requestOptions.endPoint = 'users/login';
      requestOptions.data = data;
    }

    try {
      const res: { user: User } = await api.request(requestOptions);
      dispatch(fetchUserSuccess(res.user));
    } catch(err) {
        const errMsg = err.response?.data?.message;
        dispatch(fetchUserFailure(errMsg));
    };
  }; 
};

export function checkUserAsync(): ThunkAction<void, AppStore, unknown, UserActionsType> {
  return async (dispatch, getState) => {
    const state = getState();

    if (state.user.isFetching) return;

    dispatch(checkUserStart());

    const options = {
      method: 'GET',
      endPoint: 'users/check-auth'
    }

    try {
      const res: { user: User } = await api.request(options);
      dispatch(checkUserSuccess());
      dispatch(fetchUserSuccess(res.user));
    
    } catch(err) {
        console.dir(err);
        dispatch(checkUserFailure());
    }

  }
}

export function updateUserDataAsync<T extends object>(data: T): ThunkAction<void, AppStore, unknown, UserActionsType> {
  return async (dispatch) => {
    dispatch(updateUserDataStart());

    const options = {
      method: 'PATCH',
      endPoint: 'users/change-user-data',
      data
    }

    try {
      
      const res: { user: User } = await api.request(options);
      dispatch(updateUserDataSuccess(res.user));
      
    } catch (err) {
        console.log(err);
        const errMsg = err.response?.data?.message;
        dispatch(updateUserDataFailure(errMsg));
    }
  }
};

export function logoutUserAsync(): ThunkAction<void, AppStore, unknown, UserActionsType> {
  return async(dispatch) => {
    dispatch(requestLogoutUser());

    try {
      const options = {
        method: 'GET',
        endPoint: 'users/logout',
      }

      await api.request(options);
      dispatch(logoutUserSuccess());
    } catch (err) {
        console.log(err);
        const errMsg = err.response?.data?.message;
        dispatch(logoutUserFailure(errMsg));
    }
  }
}