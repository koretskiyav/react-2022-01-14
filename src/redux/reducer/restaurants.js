import { normalizedRestaurants } from '../../fixtures';
import { ONSUBMIT } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, restaurantId, values } = action;

  switch (type) {
    case ONSUBMIT:
      restaurants[restaurantId].reviews.push(values.reviewId);
    // и тут ФП
    default:
      return restaurants;
  }
};
