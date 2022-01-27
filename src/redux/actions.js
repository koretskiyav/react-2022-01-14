import { DECREMENT, INCREMENT, REMOVE, SHOW, HIDE } from './reducer/constants';

export const decrement = (id) => ({ type: DECREMENT, id });
export const increment = (id) => ({ type: INCREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });
export const hide = () => ({type: HIDE});
export const show = () => ({type: SHOW});
