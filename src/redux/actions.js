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
  SET_ACTIVE_RESTAURANT,
  LOAD_USERS
} from './index.js';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });

export const addReview = (review, id) => ({
  type: ADD_REVIEW,
  review,
  id,
  generateId: ['reviewId', 'userId'],
});

export const loadRestaurants = () => ({
  type: LOAD_RESTAURANTS,
  CallAPI: '/api/restaurants',
});

export const loadReviews = (id) => async (dispatch) => {
  dispatch({ type: LOAD_REVIEWS + REQUEST, id });

  try {
    const req = await fetch(`/api/reviews?id=${id}`);
    const data = await req.json();
    dispatch({ type: LOAD_REVIEWS + SUCCESS, id, data });
  } catch (error) {
    dispatch({ type: LOAD_REVIEWS + FAILURE, id, error });
  }
};

export const loadUsers = () => async (dispatch) => {
  dispatch({ type: LOAD_USERS + REQUEST });

  try {
    const req = await fetch('/api/users');
    const data = await req.json();
    dispatch({ type: LOAD_USERS + SUCCESS, data });
  } catch (error) {
    dispatch({ type: LOAD_USERS + FAILURE, error });
  }
}


export const loadProducts = (id) => ({
  type: LOAD_PRODUCTS,
  CallAPI: `/api/products?id=${id}`,
  id: id,
});

export const setActiveId = (id) => ({
  type: SET_ACTIVE_RESTAURANT,
  activeId: id,
})