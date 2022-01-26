import { DECREMENT, INCREMENT, CLEAR } from './reducer/constants';

export const decrement = (id, price) => ({ type: DECREMENT, id, price });
export const increment = (id, price) => ({ type: INCREMENT, id, price });
export const clear = (id) => ({ type: CLEAR, id });
