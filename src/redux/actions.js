import {
  ADD_USER,
  DECREMENT,
  INCREMENT,
  POST_REVIEW,
  REMOVE,
} from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });
export const postReview = (data, restaurantId) => ({
  type: POST_REVIEW,
  data,
  restaurantId,
});
export const addUser = (name, callback) => ({ type: ADD_USER, name, callback });
