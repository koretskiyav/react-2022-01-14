import { normalizedRestaurants } from '../../fixtures';
import { ADD_REVIEW_ID } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, restaurantId, reviewId } = action;

  switch (type) {
    case ADD_REVIEW_ID:
      const tmp = { ...restaurants};
      tmp[restaurantId].reviews.push(reviewId);
      return tmp;
      ;
    default:
      return restaurants;
  }
};
