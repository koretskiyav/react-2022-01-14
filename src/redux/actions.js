import { DECREMENT, INCREMENT, DROP } from './reducer/constants';

export const decrement = (id) => ({ type: DECREMENT, id });
export const increment = (id) => ({ type: INCREMENT, id });
export const drop = (id) => ({ type: DROP, id });
