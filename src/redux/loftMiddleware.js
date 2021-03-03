import * as axios from 'axios';
import {
  GET_AUTH_REQUEST,
  GET_AUTH_SUCCESS,
  GET_AUTH_FAILURE,
  GET_AUTH,
  LOG_IN,
  LOG_OUT,
  SIGN_UP
} from './actions';

const instans = axios.create({
  baseURL: 'https://loft-taxi.glitch.me/',
  responseType: 'json'
});

const loftMiddleware = store => next => action => {
  if (action.type === LOG_IN) {
    const auth = instans.post('auth/', {email, password}).then(response => response.data.success);
    store.dispatch(GET_AUTH(auth));
  };

  return next(action);
};

export default loftMiddleware;