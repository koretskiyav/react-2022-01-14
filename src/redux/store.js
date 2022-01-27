import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer, {basket: {showBasket: false}, order: {}});
window.store = store

export default store;
