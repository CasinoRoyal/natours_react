import { ThunkAction } from 'redux-thunk';

import { 
  User,
  UserActionsType,
  FILL_USER,
  CLEAR_USER,
  UPDATE_USER_DATA_START,
  UPDATE_USER_DATA_SUCCESS,
  UPDATE_USER_DATA_FAILURE,
} from './types';
import { AppStore } from '../store/store';
import { api } from '../http/api';

export function fillUser(payload: User): UserActionsType {
  return {
    type: FILL_USER,
    payload
  }
};

export function clearUser(): UserActionsType {
  return {
    type: CLEAR_USER
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