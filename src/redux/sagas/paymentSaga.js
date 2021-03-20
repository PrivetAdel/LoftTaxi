import {takeEvery, put, call} from 'redux-saga/effects';
import {saveCardData, getCardData} from '../api';
import {SAVE_CARD_DATA, GET_AUTH, getCard, postCard} from '../actions';

function* postCardSaga(action) {
  try {
    const {cardName, cardNumber, expiryDate, cvc} = action.payload;
    const token = localStorage.getItem('token')
    const response = yield call(saveCardData, cardName, cardNumber, expiryDate, cvc, token);
    yield put(postCard(response));
  } catch (error) {
    console.log(error);
  }
};

function* getCardSaga() {
  try {
    const token = localStorage.getItem('token')
    const response = yield call(getCardData, token);
    yield put(getCard(response));
  } catch (error) {
    console.log(error);
  }
}

export function* paymentSaga() {
  yield takeEvery(SAVE_CARD_DATA, postCardSaga);
  yield takeEvery(GET_AUTH, getCardSaga);
};