import { createSelector } from 'reselect';

const restaurantsSelector = (state) => state.restaurants;
const productsSelector = (state) => state.products;
const orderSelector = (state) => state.order;
const reviewsSelector = (state) => state.reviews;

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
