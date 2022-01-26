import { DECREMENT, INCREMENT, CLEAR } from './constants';

export default function (state = {}, action) {
  const { type, id, price } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        [id]: {
          amount: (state[id]?.amount || 0) + 1,
          price: (state[id]?.price || 0) + price,
        },
      };
    case DECREMENT:
      return {
        ...state,
        [id]: {
          amount: (state[id]?.amount || 0) - 1,
          price: (state[id]?.amount || 0) - price,
        },
      };
    case CLEAR:
      const nextState = { ...state };
      delete nextState[id];
      return { ...nextState };
    default:
      return state;
  }
}
