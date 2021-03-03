import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import loftMiddleware from './loftMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(loftMiddleware))
);

export default store;