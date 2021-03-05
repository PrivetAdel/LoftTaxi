export const GET_AUTH = 'GET_AUTH';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SIGN_UP = 'SIGN_UP';

export const getAuth = (isLoggedIn) => ({
  type: GET_AUTH,
  payload: isLoggedIn 
});

export const logIn = (email, password) => ({
  type: LOG_IN,
  payload: {
    email, 
    password
  }
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const SignUp = (email, password, name, surname) => ({
  type: SIGN_UP,
  payload: {
    email, 
    password, 
    name, 
    surname
  } 
});
