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
  [reviewsSelector, restaurantsSelector, (state, activeId) => activeId],
  (reviews, restaurants, activeId) => {
    const reviewIds = restaurants[activeId].reviews;
    const restaurantReviews = Object.values(reviews).filter(review => reviewIds.includes(review.id));
    const total = restaurantReviews.reduce((acc, { rating }) => acc + rating, 0);
    const length = restaurantReviews.length;
    return Math.round(total / length);
  }
);

export const amountSelector = createSelector(
  [orderSelector, (state, id) => id],
  (order, id) => {
    return order[id];
  }
);

export const productSelector = createSelector(
  [productsSelector, (state, id) => id],
  (products, id) => {
    return products[id];
  }
);

export const userSelector = createSelector(
  [usersSelector, (state, id) => id],
  (user, id) => {
    return user[id];
  }
);

export const restaurantSelector = createSelector(
  [restaurantsSelector, (state, id) => id],
  (restaurants, id) => {
    return restaurants[id];
  }
);

export const reviewSelector = createSelector(
  [reviewsSelector, (state, id) => id],
  (reviews, id) => {
    return reviews[id];
  }
);

export const reviewsForRestaurantSelector = createSelector(
  [reviewsSelector, restaurantsSelector, (state, restaurantId) => restaurantId],
  (reviews, restaurants, restaurantId) => {
    const restaurant = restaurants[restaurantId];
    return Object.keys(reviews).filter((key) => restaurant.reviews.includes(key));
  }
);

export const menuForRestaurantSelector = createSelector(
  [productsSelector, restaurantsSelector, (state, restaurantId) => restaurantId],
  (products, restaurants, restaurantId) => {
    const restaurant = restaurants[restaurantId];
    return Object.keys(products).filter((key) => restaurant.menu.includes(key));
  }
);
