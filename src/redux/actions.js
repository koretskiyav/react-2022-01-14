import { DECREMENT, INCREMENT, REMOVE, ADD_USER, ADD_REVIEW } from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });
export const addUser = (user) => ({ type: ADD_USER, user });
export const addReview = (review) => ({ type: ADD_REVIEW, review });
