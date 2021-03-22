import {orderReducer} from './orderReducer';
import {GET_ADDRESS_LIST, ADD_ADDRESSES, BUILD_A_ROUTE} from '../actions';

describe('orderReducer', () => {
  let action;
  const initialState = {
    addresses: [],
    route: {
      address1: '',
      address2: ''
    },
    routePoints: []
  };

  test('Should retern default state if no action type', () => {
    expect(orderReducer({}, {type: null})).toEqual({})
  });


  test('Should return address list', () => {
    action = {
      type: GET_ADDRESS_LIST,
      payload: ['address-1', 'address-2', 'address-3']
    };

    expect(orderReducer(initialState, action)).toEqual({
      ...initialState,
      addresses: ['address-1', 'address-2', 'address-3']
    })
  });

  test('Should return start and end points of the route', () => {
    action = {
      type: ADD_ADDRESSES,
      payload: {
        address1: 'address1',
        address2: 'address2'
      }
    };

    expect(orderReducer(initialState, action)).toEqual({
      ...initialState,
      route: {
        address1: 'address1',
        address2: 'address2'
      }
    })
  });

  test('Should return all points of the route', () => {
    action = {
      type: BUILD_A_ROUTE,
      payload: [[30, 50], [31, 51], [32, 52]]
    };

    expect(orderReducer(initialState, action)).toEqual({
      ...initialState,
      routePoints: [[30, 50], [31, 51], [32, 52]]
    })
  });
});