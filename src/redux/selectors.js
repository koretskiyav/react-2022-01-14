import { createSelector } from 'reselect';
import { arrToMap } from './utils';

const restaurantsSelector = (state) => state.restaurants.entities;
const productsSelector = (state) => state.products;
const normalizedProductsSelector = (state) =>
  arrToMap(
    Object.values(state.products).flatMap((product) =>
      Object.values(product.entities)
    )
  );
const orderSelector = (state) => state.order;
const reviewsSelector = (state) => state.reviews;
const usersSelector = (state) => state.users.entities;

export const restaurantsLoadingSelector = (state) => state.restaurants.loading;
export const restaurantsLoadedSelector = (state) => state.restaurants.loaded;
export const productsForRestaurantLoadingSelector = (state, { id }) =>
  state.products[id] ? state.products[id].loading : false;
export const productsForRestaurantLoadedSelector = (state, { id }) =>
  state.products[id] ? state.products[id].loaded : false;
export const reviewsForRestaurantLoadingSelector = (state, { id }) =>
  state.reviews[id] ? state.reviews[id].loading : false;
export const reviewsForRestaurantLoadedSelector = (state, { id }) =>
  state.reviews[id] ? state.reviews[id].loaded : false;

export const restaurantsListSelector = createSelector(
  restaurantsSelector,
  Object.values
);

export const restaurantSelector = (state, { id }) =>
  restaurantsSelector(state)[id];

export const productsForRestaurantSelector = (state, { id }) =>
  productsSelector(state)[id]
    ? Object.values(productsSelector(state)[id].entities)
    : [];

export const productsListSelector = createSelector(
  productsForRestaurantSelector,
  Object.values
);

export const productSelector = (state, { restId, id }) =>
  productsSelector(state)[restId].entities[id];

export const reviewsForRestaurantSelector = (state, { id }) =>
  reviewsSelector(state)[id]
    ? Object.values(reviewsSelector(state)[id].entities)
    : [];

export const reviewsListSelector = createSelector(
  reviewsForRestaurantSelector,
  Object.values
);

export const reviewSelector = (state, { restId, id }) => {
  return reviewsSelector(state)[restId].entities[id];
};

export const reviewWitUserSelector = createSelector(
  reviewSelector,
  usersSelector,
  (review, users) => ({
    ...review,
    user: users[review.userId]?.name,
  })
);

export const amountSelector = (state, { id }) => orderSelector(state)[id] || 0;

export const orderProductsSelector = createSelector(
  [normalizedProductsSelector, orderSelector],
  (products, order) => {
    const orderProducts = Object.keys(order)
      .filter((productId) => order[productId] > 0)
      .map((productId) => products[productId])
      .map((product) => ({
        product,
        amount: order[product.id],
        subtotal: order[product.id] * product.price,
      }));

    return orderProducts;
  }
);

export const totalSelector = createSelector(
  [orderProductsSelector],
  (orderProducts) =>
    orderProducts.reduce((acc, { subtotal }) => acc + subtotal, 0)
);

export const averageRatingSelector = createSelector(
  reviewsListSelector,
  (reviews) => {
    if (reviews.length > 0) {
      const ratings = reviews.map((review) => review.rating);
      return Math.round(
        ratings.reduce((acc, rating) => acc + rating) / ratings.length
      );
    } else {
      return null;
    }
  }
);
