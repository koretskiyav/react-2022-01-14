import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  REVIEW_ADD,
  CREATE_REVIEW,
  CREATE_USER,
  RESTAURANTS_ADD_REVIEW,
} from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });

export const reviewAdd = (payload) => ({
  type: REVIEW_ADD,
  payload: { ...payload },
});
export const createReview = (payload) => ({
  type: CREATE_REVIEW,
  payload: { ...payload },
});

export const createUser = (payload) => ({
  type: CREATE_USER,
  payload: { ...payload },
});

export const restaurantsAddReview = (payload) => ({
  type: RESTAURANTS_ADD_REVIEW,
  payload: { ...payload },
});
