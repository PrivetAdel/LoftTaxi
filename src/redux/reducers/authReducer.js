import {GET_AUTH, LOG_OUT, POST_CARD, SAVE_CARD_DATA} from '../actions/actions';

const initialState = {
  isLoggedIn: false,
  error: null,
  isCardData: false,
  cardData: {}
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

    case SAVE_CARD_DATA:
      return {
        ...state,
        cardData: action.payload
      };

    case POST_CARD: 
      return {
        ...state,
        isCardData: true
      }
    
    default: 
      return state
  };
};
