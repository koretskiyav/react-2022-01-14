import { combineReducers } from 'redux';
import order from './order';
import product from './product';

export default combineReducers({
  order,
  product,
});
