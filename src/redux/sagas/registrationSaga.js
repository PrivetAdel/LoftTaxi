import {takeEvery, put, call} from 'redux-saga/effects';
import {postRegister, saveToken} from '../api';
import {SIGN_UP, getAuth} from '../actions';

function* registrationSaga(action) {
  try {
    const {email, password, name, surname} = action.payload;
    const response = yield call(postRegister, email, password, name, surname);
    yield put(getAuth(response.success));
    yield call(saveToken, response.token);  
  } catch (error) {
    console.log(error);
  }
};

export function* signUpSaga() {
  yield takeEvery(SIGN_UP, registrationSaga);
};