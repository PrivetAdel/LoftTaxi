import {all, fork} from 'redux-saga/effects';
import {logInSaga} from './authorizationSaga';
import {signUpSaga} from './registrationSaga';
import {addressListSaga} from './addressListSaga';
import {routeSaga} from './routeSaga';
import {paymentSaga} from './paymentSaga';

export default function* rootSaga() {
  yield all([
    fork(logInSaga),
    fork(signUpSaga),
    fork(addressListSaga),
    fork(routeSaga),
    fork(paymentSaga)
    ]);
};