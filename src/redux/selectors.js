import { createSelector } from 'reselect';

const restaurantsSelector = (state) => state.restaurants;
const productsSelector = (state) => state.products;
const productSelector = (state, props) => productsSelector(state)[props.id];
const orderSelector = (state) => state.order;
const orderProductAmountSelector = (state, props) => orderSelector(state)[props.id];
const reviewsSelector = (state) => state.reviews;
const reviewSelector = (state, props) => reviewsSelector(state)[props.id];
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

export const makeProductSelector = () => createSelector(
    [productSelector],
    product => product
);

export const makeOrderProductAmountSelector = () => createSelector(
    [orderProductAmountSelector,],
    amount => amount || 0,
)

export const restaurantsListSelector = createSelector(
    [restaurantsSelector],
    restaurants => Object.values(restaurants),
);

export const makeReviewSelector = () => createSelector(
    [reviewSelector, usersSelector],
    (review, users) => ({
        ...review,
        user: users[review.userId].name,
    })
);