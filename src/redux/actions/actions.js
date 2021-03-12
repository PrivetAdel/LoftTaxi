export const GET_AUTH = 'GET_AUTH';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SIGN_UP = 'SIGN_UP';
export const SAVE_CARD_DATA = 'SAVE_CARD_DATA';
export const POST_CARD = 'POST_CARD';

export const getAuth = (isLoggedIn) => ({
  type: GET_AUTH,
  payload: isLoggedIn 
});

export const logIn = (email, password) => ({
  type: LOG_IN,
  payload: {
    email, 
    password
  }
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const signUp = (email, password, name, surname) => ({
  type: SIGN_UP,
  payload: {
    email, 
    password, 
    name, 
    surname
  } 
});

export const postCard = (isCardData) => ({
  type: POST_CARD,
  payload: isCardData 
}); 

export const saveCardData = (name, cardNumber, expiryDate, cvc) => ({
  type: SAVE_CARD_DATA,
  payload: {
    name, 
    cardNumber, 
    expiryDate, 
    cvc
  }
})