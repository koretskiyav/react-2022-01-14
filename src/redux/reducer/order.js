import { DECREMENT, INCREMENT, REMOVE } from './constants';

// { [productId]: amount }
export default function (state = {}, action) {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      return { ...state, [id]: (state[id] || 0) - 1 };
    case REMOVE:
      const tmp =  {...state}
      delete tmp[id]
      return tmp
    default:
      return state;
  }
}
