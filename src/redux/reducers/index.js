import {combineReducers} from 'redux';
import {authReducer} from './authReducer';
import {cardReducer} from './cardReducer';
import {orderReducer} from './orderReducer';

const rootReducer = combineReducers({
  authReducer,
  cardReducer,
  orderReducer
});

export default rootReducer;
