import { createSelector } from 'reselect';

const productsSelector = (state) => state.products;
export const productSelector = (state, props) => state.products[props.id];
export const productOrderAmountSelector = (state, props) => state.order[props.id] || 0;
const orderSelector = (state) => state.order;

export const orderProductsSelector = createSelector(
  [productsSelector, orderSelector],
  (products, order) =>
    Object.keys(order)
      .filter((productId) => order[productId] > 0)
      .map((productId) => products[productId])
      .map((product) => ({
        product,
        amount: order[product.id],
        subtotal: order[product.id] * product.price,
      }))
);

export const totalSelector = createSelector(
  [orderProductsSelector],
  (orderProducts) =>
    orderProducts.reduce((acc, { subtotal }) => acc + subtotal, 0)
);

export const restaurantsSelector = (state) => state.restaurants;
export const restaurantSelector = (state, props) => state.restaurants[props.id];
const reviewsSelector = (state) => state.reviews;

export const restaurantRatingSelector = createSelector(
    [restaurantSelector, reviewsSelector],
    (restaurant, reviews) =>
        ((restaurant.reviews.length > 0) ?
        restaurant.reviews.reduce((acc, id) => acc + reviews[id].rating, 0) / restaurant.reviews.length : 0)
);

const reviewSelector = (state, props) => state.reviews[props.id];
const usersSelector = (state) => state.users;
//const userSelector = (state, props) => state.users[props.id];

export const reviewTextSelector = createSelector (
    [reviewSelector],
    (review) => (review.text || '')
);

export const reviewRatingSelector = createSelector (
    [reviewSelector],
    (review) => (review.rating || 0)
);

export const reviewUsersNameSelector = createSelector (
    [reviewSelector, usersSelector],
    (review, users) =>
        (users[review.userId].name || 'Anonymous')
);