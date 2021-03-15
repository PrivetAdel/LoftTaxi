import {cardReducer} from './cardReducer';

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

});