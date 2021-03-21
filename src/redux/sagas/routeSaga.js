import {takeEvery, put, call} from 'redux-saga/effects';
import {getRoute} from '../api';
import {buildARoute, ADD_ADDRESSES} from '../actions';

function* getRouteSaga(action) {
  try {
    const {address1, address2} = action.payload
    const response = yield call(getRoute, address1, address2);
    yield put(buildARoute(response));
  } catch (error) {
    console.log(error);
  }
};

export function* routeSaga() {
  yield takeEvery(ADD_ADDRESSES, getRouteSaga);
};