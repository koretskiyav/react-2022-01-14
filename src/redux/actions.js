import { DECREMENT, INCREMENT, REMOVE, SET_ACTIVE_ID } from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });
export const setActiveId = (id) => ({ type: SET_ACTIVE_ID, id });
