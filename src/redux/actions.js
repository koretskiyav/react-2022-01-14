import { DECREMENT, INCREMENT, CLEAR_PRODUCT } from './reducer/constants';

export const decrement = (payload) => ({ type: DECREMENT, payload });
export const increment = (payload) => ({ type: INCREMENT, payload });
export const remove = (payload) => ({ type: CLEAR_PRODUCT, payload });