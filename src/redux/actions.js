import { DECREMENT, INCREMENT, REMOVE_PRODUCT } from './reducer/constants';

export const decrement = (id) => ({ type: DECREMENT, id });
export const increment = (id) => ({ type: INCREMENT, id });
export const removeProduct = (id) => ({ type: REMOVE_PRODUCT, id });