import { DECREMENT, INCREMENT, REMOVE, OPEN_BASKET } from './reducer/constants';

export const decrement = (product) => ({ type: DECREMENT, product });
export const increment = (product) => ({ type: INCREMENT, product });
export const remove = (product) => ({ type: REMOVE, product });
export const open_basket = () => ({ type: OPEN_BASKET });
