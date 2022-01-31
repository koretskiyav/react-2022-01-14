import { normalizedRestaurants } from '../../fixtures';
import { POST_REVIEW } from '../constants';

const defaultRestaurants = Object.fromEntries(
  normalizedRestaurants.map((restaurant) => [restaurant.id, restaurant])
);

export default (restaurants = defaultRestaurants, action) => {
  const { type } = action;

  switch (type) {
    case POST_REVIEW:
      debugger;
      const { restaurantId, id } = action;
      const target = restaurants[restaurantId];
      return target
        ? {
            ...restaurants,
            [restaurantId]: { ...target, reviews: [...target.reviews, id] },
          }
        : restaurants;
    default:
      return restaurants;
  }
};
