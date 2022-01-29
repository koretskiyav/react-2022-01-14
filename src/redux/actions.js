import { DECREMENT, INCREMENT, REMOVE, ADD_REVIEW, ADD_USER, ADD_REVIEW_ID } from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });
export const add_review = (review) => ({ type: ADD_REVIEW, review });
export const add_user = (user) => ({ type: ADD_USER, user });
export const add_review_id = (restaurantId, reviewId) => ({ type: ADD_REVIEW_ID, restaurantId, reviewId });
