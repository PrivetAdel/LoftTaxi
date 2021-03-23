import {takeEvery, put, call} from 'redux-saga/effects';
import {getAddressList} from '../api';
import {getAddresses, GET_AUTH} from '../actions';

export function* getAddressListSaga() {
  try {
    const response = yield call(getAddressList);
    yield put(getAddresses(response.addresses));
  } catch (error) {
    console.log(error);
  }
};

export function* addressListSaga() {
  yield takeEvery(GET_AUTH, getAddressListSaga);
};