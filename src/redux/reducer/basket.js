import { SHOW, HIDE } from './constants';

// { [productId]: amount }
export default function (state = {}, action) {
  const { type } = action;
  switch (type) {
    case SHOW:
      return { ...state, showBasket: true };
    case HIDE:
      return { ...state, showBasket: false };
    default:
      return state;
  }
}