import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  ADD_REVIEW,
  LOAD_RESTAURANTS,
  REQUEST,
  SUCCESS,
  FAILURE,
  LOAD_REVIEWS,
  LOAD_PRODUCTS,
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

export const loadProducts = (restId) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCTS + REQUEST, restId });

  try {
    const data = await fetch(`/api/products?id=${restId}`).then((res) =>
      res.json()
    );
    dispatch({ type: LOAD_PRODUCTS + SUCCESS, restId, data });
  } catch (error) {
    dispatch({ type: LOAD_PRODUCTS + FAILURE, restId, error });
  }
};

export const loadReviews = (restId) => async (dispatch) => {
  dispatch({ type: LOAD_REVIEWS + REQUEST, restId });

  try {
    const data = await fetch(`/api/reviews?id=${restId}`).then((res) =>
      res.json()
    );
    dispatch({ type: LOAD_REVIEWS + SUCCESS, restId, data });
  } catch (error) {
    dispatch({ type: LOAD_REVIEWS + FAILURE, restId, error });
  }
};

export const loadUsers = () => async (dispatch) => {
  dispatch({ type: LOAD_USERS + REQUEST,  });

  try {
    const data = await fetch('/api/users').then((res) =>
      res.json()
    );
    dispatch({ type: LOAD_USERS + SUCCESS, data });
  } catch (error) {
    dispatch({ type: LOAD_USERS + FAILURE, error });
  }
};
