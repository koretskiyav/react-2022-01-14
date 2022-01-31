import { DECREMENT, INCREMENT, REMOVE, COMMENT, ADD_USER, REVIEW } from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });
export const comment = (comment) => ({ type: COMMENT, comment });
export const addUser = (user) => ({ type: ADD_USER, user });
export const addReview = (review) => ({ type: REVIEW, review });
