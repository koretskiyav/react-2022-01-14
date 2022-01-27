import { DECREMENT, INCREMENT, REMOVE_PRODUCT } from './constants';

// { [productId]: amount }
export default function (state = {}, action) {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      return { ...state, [id]: state[id] > 0 ? state[id] - 1 : 0 };
    case REMOVE_PRODUCT:
      let newState = state;
      delete newState[id]
      return { ...newState };
    default:
      return state;
  }
}
