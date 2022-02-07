import { DECREMENT, INCREMENT, REMOVE } from '../constants';

// { [productId]: amount }
export default function (state = {}, action) {
  const { type, id, restId } = action;
  switch (type) {
    case INCREMENT:
      return { 
        ...state, 
        [id]: {
          count: (state[id]?.count || 0) + 1,
          restId: restId, 
        }
      };
    case DECREMENT:
      return { ...state, 
        [id]: {
          count: state[id]?.count > 0 ? (state[id]?.count || 0) - 1 : 0,
          restId: restId, 
        }
      };
    case REMOVE:
      return { ...state, [id]: 0 };
    default:
      return state;
  }
}
