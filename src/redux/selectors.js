import { createSelector } from 'reselect';

const productsSelector = (state) => state.products;
const orderSelector = (state) => state.order;

export const amountSelector = (state, id) => state.order[id] || 0;
export const productSelector = (state, id) => state.products[id];
export const restaurantSelector = (state, id) => state.restaurants[id];
export const restaurantsSelector = (state) => state.restaurants;
export const reviewsSelector = (state) => state.reviews;
export const reviewSelector = (state, id) => state.reviews[id];
export const usersSelector = (state) => state.users;

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
export const userSelectorByReviewId = createSelector(
  [usersSelector, reviewSelector],
  (users, review) => {
    return users[review.userId];
  }
);
export const totalSelector = createSelector(
  [orderProductsSelector],
  (orderProducts) =>
    orderProducts.reduce((acc, { subtotal }) => acc + subtotal, 0)
);
