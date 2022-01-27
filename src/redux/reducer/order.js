import { DECREMENT, INCREMENT, REMOVING } from './constants';

// { [productId]: amount }
export default function (state = {}, action) {
  const { type, id } = action;
  
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      if (state[id] && state[id] > 1) {
        return { ...state, [id]: (state[id] || 0) - 1 };
      } // eslint-disable-next-line
    case REMOVING:
      const tmp = { ...state };
      delete tmp[id]
      return tmp;
    default:
      return state;
  }
}
