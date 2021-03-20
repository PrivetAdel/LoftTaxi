import {takeEvery, put, call} from 'redux-saga/effects';
import {getAddressList, getRoute} from '../api';
import {getAddresses, buildARoute, GET_AUTH, ADD_ADDRESSES} from '../actions';

function* getAddressListSaga() {
  try {
    const response = yield call(getAddressList);
    yield put(getAddresses(response.addresses));
  } catch (error) {
    console.log(error);
  }
};

function* getRouteSaga(action) {
  try {
    const {address1, address2} = action.payload
    const response = yield call(getRoute, address1, address2);
    yield put(buildARoute(response));
  } catch (error) {
    console.log(error);
  }
}

export function* addressListSaga() {
  yield takeEvery(GET_AUTH, getAddressListSaga);
  yield takeEvery(ADD_ADDRESSES, getRouteSaga);
};