export const GET_AUTH = 'GET_AUTH';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SIGN_UP = 'SIGN_UP';
export const SAVE_CARD_DATA = 'SAVE_CARD_DATA';
export const POST_CARD = 'POST_CARD';
export const GET_CARD = 'GET_CARD';
export const GET_ADDRESS_LIST = 'GET_ADDRESS_LIST';
export const ADD_ADDRESSES = 'ADD_ADDRESSES';
export const BUILD_A_ROUTE = 'BUILD_A_ROUTE';
export const GET_ORDER = 'GET_ORDER';

export const getAuth = (isLoggedIn) => ({
  type: GET_AUTH,
  payload: isLoggedIn 
});

export const logIn = (formData) => ({
  type: LOG_IN,
  payload: {...formData}
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const signUp = (formData) => ({
  type: SIGN_UP,
  payload: {...formData} 
});

export const postCard = (isCardData) => ({
  type: POST_CARD,
  payload: isCardData 
}); 

export const saveCardData = (formData) => ({
  type: SAVE_CARD_DATA,
  payload: {...formData}
});

export const getCard = () => ({
  type: GET_CARD
});

export const getAddresses = (addresses) => ({
  type: GET_ADDRESS_LIST,
  payload: addresses
});

export const addAddresses = (formData) => ({
  type: ADD_ADDRESSES,
  payload: {...formData}
});

export const buildARoute = (routePoints) => ({
  type: BUILD_A_ROUTE,
  payload: routePoints
});

export const getOrder = (isOrdered) => ({
  type: GET_ORDER,
  payload: isOrdered
});
