import {getAuth, postCard, getCard, LOG_IN, GET_AUTH, SAVE_CARD_DATA} from './actions';
import {serverAuth, saveCardData, getCardData} from './api';

const loftMiddleware = (store) => (next) => async (action) => {
  if (action.type === LOG_IN) {
    const {email, password} = action.payload;
    const success = await serverAuth(email, password);
    if (success) {
      store.dispatch(getAuth(success));
      localStorage.setItem('token', 'true');
    }
  }

  if (action.type === GET_AUTH) {
    const token = localStorage.getItem('token');
    const {cardName, cardNumber, expiryDate, cvc} = await getCardData(token);
    if (cardName && cardNumber && expiryDate && cvc) {
      store.dispatch(getCard(cardName, cardNumber, expiryDate, cvc));
    }
  }

  if (action.type === SAVE_CARD_DATA) {
    const {cardName, cardNumber, expiryDate, cvc} = action.payload;
    const token = localStorage.getItem('token')
    const success = await saveCardData(cardName, cardNumber, expiryDate, cvc, token);
    if (success) {
      store.dispatch(postCard(success));
    }
  }

  return next(action);
};

export default loftMiddleware;
