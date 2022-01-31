import { createSelector } from 'reselect';

export const restaurantsSelector = (state) => state.restaurants;
const productsSelector = (state) => state.products;
const orderSelector = (state) => state.order;
const reviewsSelector = (state) => state.reviews;
const usersSelector = (state) => state.users;

export const restaurantByIdSelector = createSelector(
  [restaurantsSelector, (state, id) => id],
  (restaurants, id) => restaurants[id]
);

export const productByIdSelector = createSelector(
  [productsSelector, (state, id) => id],
  (products, id) => products[id]
);

export const reviewByIdSelector = createSelector(
  [reviewsSelector, (state, id) => id],
  (reviews, id) => reviews[id]
);

export const userByReviewSelector = createSelector(
  [reviewsSelector, usersSelector, (state, id) => id],
  (reviews, users, id) => users[reviews[id].userId]
);

export const productAmountByIdSelector = createSelector(
  [orderSelector, (state, id) => id],
  (orders, id) => orders[id] || 0
);

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

export const reviewsByRestaurantSelector = createSelector(
  [restaurantsSelector, reviewsSelector, (state, restaurantId) => restaurantId],
  (restaurants, allReviews, id) =>
    restaurants[id].reviews.map((id) => allReviews[id])
);

export const averageRatingsSelector = createSelector(
  [reviewsByRestaurantSelector, (state, restaurantId) => restaurantId],
  (reviews, id) =>
    Math.round(
      reviews.reduce((acc, { rating }) => acc + rating, 0) / reviews.length
    )
);
