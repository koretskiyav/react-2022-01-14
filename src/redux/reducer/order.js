import { DECREMENT, INCREMENT, REMOVE } from './constants';

// { productID: {product, amount} }
export default function (state = {}, action) {
  const { type, product } = action;
  const productAmount = state[product?.id];
  const amount = productAmount?.amount;
  switch (type) {
    case INCREMENT:
      return { ...state, [product.id]: {product, amount: (amount || 0) + 1} };
    case DECREMENT:
      return { ...state, [product.id]: {product, amount: (amount || 0) > 0 ? amount - 1 : 0} };
    case REMOVE:
      const newState = {...state};
      delete newState[product.id];
      return newState;
    default:
      return state;
  }
}
