export type AuthFormData = {
  email: string;
  password: string;
  username?: string;
  passwordConfirm?: string;
};

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
type requestLoginAction = {
  type: typeof REQUEST_LOGIN
}

export const REQUEST_SIGNUP = 'REQUEST_SIGNUP';
type requestSignupAction = {
  type: typeof REQUEST_SIGNUP
}

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
type authSuccessAction = {
  type: typeof AUTH_SUCCESS
}

export const AUTH_FAILURE = 'AUTH_FAILURE';
type authFailureAction = {
  type: typeof AUTH_FAILURE,
  payload: string
}

export const REQUEST_LOGOUT = 'REQUEST_LOGOUT';
type requestLogoutAction = {
  type: typeof REQUEST_LOGOUT
}

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
type logoutSuccessAction = {
  type: typeof LOGOUT_SUCCESS
}

export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
type logoutFailureAction = {
  type: typeof LOGOUT_FAILURE,
  payload: string
}

export const FETCH_CHECK_AUTH_TOKEN = 'FETCH_CHECK_AUTH_TOKEN';
type fetchCheckAuthTokenAction = {
  type: typeof FETCH_CHECK_AUTH_TOKEN
}

export const CHECK_AUTH_TOKEN_SUCCESS = 'CHECK_AUTH_TOKEN_SUCCESS';
type checkAuthTokenSuccessAction = {
  type: typeof CHECK_AUTH_TOKEN_SUCCESS
}

export const CHECK_AUTH_TOKEN_FAILURE = 'CHECK_AUTH_TOKEN_FAILURE';
type checkAuthTokenFailureAction = {
  type: typeof CHECK_AUTH_TOKEN_FAILURE,
  payload: string
}

export type AuthTypesActions = 
  | requestLoginAction
  | requestSignupAction
  | authSuccessAction
  | requestLogoutAction
  | logoutSuccessAction
  | logoutFailureAction
  | authFailureAction
  | fetchCheckAuthTokenAction
  | checkAuthTokenSuccessAction
  | checkAuthTokenFailureAction;