import { normalizedRestaurants } from '../../fixtures';
import { UPDATE_RESTAURANT } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, restaurantData } = action;

  switch (type) {
    case UPDATE_RESTAURANT:
      return { ...restaurants, [restaurantData.id]: restaurantData };
    default:
      return restaurants;
  }
};
