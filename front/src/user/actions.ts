import { ThunkAction } from 'redux-thunk';

import { 
  User,
  UserActionsType,
  AuthFormData,
  REQUEST_LOGIN_USER,
  REQUEST_SIGNUP_USER, 
  FETCH_USER_SUCCESS, 
  FETCH_USER_FAILURE 
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

export function fetchUserAsync(methodAuth:string, data:AuthFormData): ThunkAction<void, AppStore, unknown, UserActionsType> {
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
      const res: User = await api.request(requestOptions);
      dispatch(fetchUserSuccess(res));
    } catch(err) {
        const errMsg = err.response?.data?.message
        dispatch(fetchUserFailure(errMsg));
    };
  }; 
};