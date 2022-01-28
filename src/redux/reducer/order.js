import {DECREMENT, DEL_ITEM, INCREMENT} from './constants';

// { [productId]: amount }
export default function (state = {}, action) {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      const count = (state[id] || 0) - 1;
      return { ...state, [id]: count < 0 ? 0 : count };
    case DEL_ITEM:
      return { ...state, [id]: 0 };
    default:
      return state;
  }
}
