// const GET_AUTH_REQUEST = 'GET_AUTH_REQUEST';
// const GET_AUTH_SUCCESS = 'GET_AUTH_SUCCESS';
// const GET_AUTH_FAILURE = 'GET_AUTH_FAILURE';
const GET_AUTH = 'GET_AUTH';
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const SIGN_UP = 'SIGN_UP';

export const getAuth = (isLoggedIn) => ({
  type: GET_AUTH,
  payload: isLoggedIn 
});

export const logIn = (userObj) => ({
  type: LOG_IN,
  payload: userObj 
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const SignUp = (userObj) => ({
  type: SIGN_UP,
  payload: userObj 
});