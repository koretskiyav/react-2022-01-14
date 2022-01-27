import { combineReducers } from 'redux';
import order from './order';
import app from './app';

export default combineReducers({
  order,
  app
});
