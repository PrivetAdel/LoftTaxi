import {getAuth, postCard, LOG_IN, SAVE_CARD_DATA} from './actions/actions';
import {serverAuth, saveCardData} from './api';

const loftMiddleware = (store) => (next) => async (action) => {
  if (action.type === LOG_IN) {
    const {email, password} = action.payload;
    const success = await serverAuth(email, password);
    if (success) {
      store.dispatch(getAuth(success));
    } 
  }

  if (action.type === SAVE_CARD_DATA) {
    const {cardName, cardNumber, expiryDate, cvc} = action.payload;
    const token = store.isLoggedIn;
    const success = await saveCardData(cardName, cardNumber, expiryDate, cvc, token);
    if (success) {
      store.dispatch(postCard(success));
    } 
  }

  return next(action);
};

export default loftMiddleware;
