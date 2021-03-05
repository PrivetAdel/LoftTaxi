import {GET_AUTH, LOG_OUT} from '../actions/actions';

const initialState = {
  isLoggedIn: false,
  error: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTH:
      return {
        ...state,
        isLoggedIn: action.payload,
      };

    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        };
    
    default: 
      return state
  };
};
