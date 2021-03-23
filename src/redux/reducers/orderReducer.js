import {GET_ADDRESS_LIST, ADD_ADDRESSES, BUILD_A_ROUTE, GET_ORDER} from '../actions';

const initialState = {
  addresses: [],
  route: {
    address1: '',
    address2: ''
  },
  routePoints: [],
  isOrdered: false
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
    
    case GET_ORDER:
      return {
        ...state,
        isOrdered: action.payload
      };
    
    default: 
      return state;
  };
};