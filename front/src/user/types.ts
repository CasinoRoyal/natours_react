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

export type AuthFormData = {
  email: string;
  password: number;
  username?: string;
  confirmPassword?: number;
};

// redux types
export const REQUEST_LOGIN_USER = 'REQUEST_LOGIN_USER';
type requestLoginUserAction = {
  type: typeof REQUEST_LOGIN_USER
}

export const REQUEST_SIGNUP_USER = 'REQUEST_SIGNUP_USER';
type requestSignupUserAction = {
  type: typeof REQUEST_SIGNUP_USER
}


export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
type fetchUserSuccessAction = {
  type: typeof FETCH_USER_SUCCESS,
  payload: User
}

export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
type fetchUserFailureAction = {
  type: typeof FETCH_USER_FAILURE,
  payload: string
}

export type UserActionsType = 
  | requestLoginUserAction
  | requestSignupUserAction
  | fetchUserSuccessAction
  | fetchUserFailureAction;