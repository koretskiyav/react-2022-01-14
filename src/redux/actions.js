import { DECREMENT, INCREMENT, RESET } from './reducer/constants';

export const decrement = (id) => ({ type: DECREMENT, id });
export const increment = (id) => ({ type: INCREMENT, id });
export const reset = (id) => ({ type: RESET, id });
