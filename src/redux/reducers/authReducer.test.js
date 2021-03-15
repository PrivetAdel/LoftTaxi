import {authReducer} from './authReducer';
import {GET_AUTH} from '../actions';

describe('authReducer', () => {
  let action;
  const initialState = {
    isLoggedIn: false
  };

  test('Should retern default state if no action type', () => {
    expect(authReducer({}, {type: null})).toEqual({})
  });

  test('Should successfully', () => {
    const {isLoggedIn} = initialState;

    action = {
      type: GET_AUTH,
      isLoggedIn
    };

    expect(authReducer(initialState, action)).toEqual({
      isLoggedIn
    })
  });

});