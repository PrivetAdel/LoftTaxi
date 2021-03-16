import {authReducer} from './authReducer';
import {GET_AUTH, LOG_OUT} from '../actions';

describe('authReducer', () => {
  let action;
  const initialState = {
    isLoggedIn: false,
    error: null
  };

  test('Should retern default state if no action type', () => {
    expect(authReducer({}, {type: null})).toEqual({})
  });

  test('Should successfully authorized', () => {
    action = {
      type: GET_AUTH,
      payload: true
    };

    expect(authReducer(initialState, action)).toEqual({
      ...initialState,
      isLoggedIn: true
    })
  });

  test('Should revoke auth when exiting the app', () => {
    action = {
      type: LOG_OUT,
      payload: false
    };

    expect(authReducer(initialState, action)).toEqual({
      ...initialState,
      isLoggedIn: false
    })
  });
});