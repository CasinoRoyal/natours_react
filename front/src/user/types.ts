export type User = {
  _id: number;
  role: string;
  active: boolean;
  name: string;
  email: string;
  photo: string;
  password: number | string;
};

export type UserData = User | null;

export type UserDataState = {
  user: UserData
};

export type ChangeDataType = {
  name: string;
  email: string;
  photo: string;
};

export type ChangePasswordType = {
  currentPassword: string;
  password: string;
  passwordConfirm: string;
};

// REDUX action types

export const FILL_USER = 'FILL_USER';
type fillUserAction = {
  type: typeof FILL_USER,
  payload: User
}

export const CLEAR_USER = 'CLEAR_USER';
type clearUserAction = {
  type: typeof CLEAR_USER,
}

export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
type fetchUserFailureAction = {
  type: typeof FETCH_USER_FAILURE,
  payload: string
}

export const UPDATE_USER_DATA_START = 'UPDATE_USER_DATA_START';
type updateUserDataStartAction = {
  type: typeof UPDATE_USER_DATA_START
}

export const UPDATE_USER_DATA_SUCCESS = 'UPDATE_USER_DATA_SUCCESS';
type updateUserDataSuccessAction = {
  type: typeof UPDATE_USER_DATA_SUCCESS,
  payload: User
}

export const UPDATE_USER_DATA_FAILURE = 'UPDATE_USER_DATA_FAILURE';
type updateUserDataFailureAction = {
  type: typeof UPDATE_USER_DATA_FAILURE,
  payload: string
}



export type UserActionsType = 
  | fillUserAction
  | clearUserAction
  | fetchUserFailureAction
  | updateUserDataStartAction
  | updateUserDataFailureAction
  | updateUserDataSuccessAction;