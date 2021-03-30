import {takeEvery, put, call} from 'redux-saga/effects';
import {serverAuth, saveToken} from '../api';
import {LOG_IN, getAuth} from '../actions';

export function* authSaga(action) {
  try {
    const {email, password} = action.payload;
    const response = yield call(serverAuth, email, password);
    yield call(saveToken, response.token);
    yield put(getAuth(response.success));
  } catch (error) {
    console.log(error);
  }
};

export function* logInSaga() {
  yield takeEvery(LOG_IN, authSaga);
};