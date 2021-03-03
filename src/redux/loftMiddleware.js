import * as axios from 'axios';
import {
  getAuth
} from './actions/actions';

const instans = axios.create({
  baseURL: 'https://loft-taxi.glitch.me/',
  responseType: 'json'
});

const loftMiddleware = store => next => action => {
  if (action.type === 'LOG_IN') {
    return instans.post('auth/', action.payload)
      .then(response => store.dispatch(getAuth(response.data.success))
    );
  };

  return next(action);
};

export default loftMiddleware;