import { createSelector } from 'reselect';

const restaurants = state => state.restaurants;
const activeId = state => state.restaurant.activeId;
const productsSelector = state => state.products;
const reviews = state => state.reviews;
const users = state => state.users
const orderSelector = state => state.order;




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

///////////////////////////////
const selectRestaurantIds = createSelector(restaurants, (restaurants) => Object.keys(restaurants) );

export const selectTabs = createSelector(
  [restaurants, selectRestaurantIds],
  (restaurants, restaurantIds) => restaurantIds.map((id) => ({id, label: restaurants[id].name }))
);

export const selectRestaurant = createSelector(
  [restaurants, reviews, activeId],
  ( restaurants, reviews, activeId) => {
    const restaurant = restaurants[activeId];
    const total = restaurant.reviews.reduce((acc, id) => acc + reviews[id].rating, 0);
    const rating = Math.round(total/restaurant.reviews.length);
    return {...restaurant, rating}
  }
)