import { normalizedRestaurants } from '../../fixtures';

const defaultRestaurants = Object.fromEntries(
  normalizedRestaurants.map((restaurant) => [restaurant.id, restaurant])
);

export default (restaurants = defaultRestaurants, action) => {
  const { type } = action;

  switch (type) {
    default:
      return restaurants;
  }
};
