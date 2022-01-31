import {
  ADD_REVIEW,
  ADD_USER,
  DECREMENT,
  INCREMENT,
  REMOVE,
} from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });
export const addUser = (user) => ({ type: ADD_USER, user });
export const addReview = (review) => ({ type: ADD_REVIEW, review });
