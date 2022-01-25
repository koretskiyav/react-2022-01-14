import { DECREMENT, INCREMENT, REMOVE, } from './constants';

// { [productId]: amount }
export default function (state = {}, action) {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      const currentValue = (state[id] || 0);
      return currentValue
        ? { ...state, [id]: currentValue - 1 }
        : state;
    case REMOVE:
      return { ...state, [id]: 0 };
    default:
      return state;
  }
}
