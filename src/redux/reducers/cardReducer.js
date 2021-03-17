import {POST_CARD, GET_CARD, SAVE_CARD_DATA} from '../actions';

const initialState = {
  isCardData: false,
  cardData: {
    cardName: '', 
    cardNumber: '', 
    expiryDate: '', 
    cvc: ''
  }
};

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CARD_DATA:
      return {
        ...state,
        cardData: action.payload
      };

    case POST_CARD: 
      return {
        ...state,
        isCardData: action.payload
      };

    case GET_CARD:
      return {
        ...state
      }
    
    default: 
      return state;
  };
};
