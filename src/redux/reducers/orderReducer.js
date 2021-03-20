import {GET_ADDRESS_LIST, ADD_ADDRESSES, BUILD_A_ROUTE} from '../actions';

const initialState = {
  addresses: [],
  route: {
    address1: '',
    address2: ''
  },
  routePoints: []
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADDRESS_LIST:
      return {
        ...state,
        addresses: action.payload
      };
    
    case ADD_ADDRESSES:
      return {
        ...state,
        route: action.payload
      };
    
    case BUILD_A_ROUTE:
      return {
        ...state,
        routePoints: action.payload
      }
    
    default: 
      return state;
  };
};