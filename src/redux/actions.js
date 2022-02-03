import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  ADD_REVIEW,
  LOAD_RESTAURANTS,
  LOAD_PRODUCTS,
  REQUEST,
  SUCCESS,
  FAILURE,
  LOAD_REVIEWS,
  LOAD_USERS,
} from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });

export const addReview = (review, restId) => ({
  type: ADD_REVIEW,
  review,
  restId,
  generateId: ['reviewId', 'userId'],
});

export const loadRestaurants = () => ({
  type: LOAD_RESTAURANTS,
  CallAPI: '/api/restaurants',
});

export const loadProducts = (id) => ({
  type: LOAD_PRODUCTS,
  id: id,
  CallAPI: `/api/products?id=${id}`,
});

export const loadReviews = (id) => async (dispatch) => {
  dispatch({ type: LOAD_REVIEWS + REQUEST, id });

  try {
    const data = await fetch(`/api/reviews?id=${id}`).then((res) => res.json());
    dispatch({ type: LOAD_REVIEWS + SUCCESS, id, data });
  } catch (error) {
    dispatch({ type: LOAD_REVIEWS + FAILURE, id, error });
  }
};

export const loadUsers = () => async (dispatch) => {
  dispatch({ type: LOAD_USERS + REQUEST });

  try {
    const data = await fetch(`/api/users`).then((res) => res.json());
    dispatch({ type: LOAD_USERS + SUCCESS, data });
  } catch (error) {
    dispatch({ type: LOAD_USERS + FAILURE, error });
  }
};
