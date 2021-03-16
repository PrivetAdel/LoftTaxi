import {cardReducer} from './cardReducer';
import {SAVE_CARD_DATA, POST_CARD, GET_CARD} from '../actions';

describe('cardReducer', () => {
  let action;
  const initialState = {
    isCardData: false,
    cardData: {
      cardName: '', 
      cardNumber: '', 
      expiryDate: '', 
      cvc: ''
    }
  };

  test('Should retern default state if no action type', () => {
    expect(cardReducer({}, {type: null})).toEqual({})
  });


  test('Should successfully saved card data', () => {
    action = {
      type: SAVE_CARD_DATA,
      payload: {
        cardName: 'Name', 
        cardNumber: '1234 1234 1234 1234', 
        expiryDate: '01/23', 
        cvc: '123'
      }
    };

    expect(cardReducer(initialState, action)).toEqual({
      ...initialState,
      cardData: {
        cardName: 'Name', 
        cardNumber: '1234 1234 1234 1234', 
        expiryDate: '01/23', 
        cvc: '123'
      }
    })
  });

  test('Should be a flag about the successful saving of the card data', () => {
    action = {
      type: POST_CARD,
      payload: true
    };

    expect(cardReducer(initialState, action)).toEqual({
      ...initialState,
      isCardData: true,
    })
  });

  test('Should return card data', () => {
    action = {
      type: GET_CARD
    };

    expect(cardReducer(initialState, action)).toEqual({
      ...initialState
    })
  });
});