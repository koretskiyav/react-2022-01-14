import { createSelector } from 'reselect';

const restaurantsSelector = (state) => state.restaurants;
const productsSelector = (state) => state.products;
const orderSelector = (state) => state.order;
const reviewsSelector = (state) => state.reviews;
const usersSelector = (state) => state.users;

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

export const averageRatingSelector = createSelector(
  [restaurantsSelector, reviewsSelector, (state, activeId) => activeId],
  (restaurants, reviews, activeId) => {
    const restaurant = restaurants[activeId];
    const total = restaurant.reviews.reduce(
      (acc, id) => acc + reviews[id].rating,
      0
    );
    const rating = Math.round(total / restaurant.reviews.length);
    return rating;
  }
);

export const reviewSelector = createSelector(
  [reviewsSelector, (state, id) => id],
  (reviews, id) => {
    return reviews[id];
  }
);

export const userSelector = createSelector(
  [usersSelector, (state, id) => id],
  (users, id) => {
    return users[id];
  }
);
