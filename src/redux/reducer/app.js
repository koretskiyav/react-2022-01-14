import { OPEN_BASKET } from './constants';

export default function (state = { openBasket: false }, action) {
  switch (action.type) {
    case OPEN_BASKET:
      return { ...state, openBasket: !state.openBasket };
    default:
      return state;
  }
}