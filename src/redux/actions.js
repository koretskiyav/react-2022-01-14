import { UPDATE_REVIEW, UPDATE_USER, DECREMENT, INCREMENT, ON_SUBMIT_REVIEW, REMOVE, UPDATE_RESTAURANT } from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });
export const onSubmitReview = (reviewData, restaurantId) => ({ type: ON_SUBMIT_REVIEW, reviewData, restaurantId });
export const updateUser = (userData) => ({ type: UPDATE_USER, userData });
export const updateReview = (reviewData) => ({ type: UPDATE_REVIEW, reviewData });
export const updateRestaurant = (restaurantData) => ({ type: UPDATE_RESTAURANT, restaurantData });




