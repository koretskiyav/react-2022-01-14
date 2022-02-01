import { normalizedRestaurants } from '../../fixtures';
import { RESTAURANTS_ADD_REVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce((acc, next) => {
  return {
    ...acc,
    [next.id]: next,
  };
}, {});

export default (restaurants = defaultRestaurants, action) => {
  const { type } = action;

  switch (type) {
    case RESTAURANTS_ADD_REVIEW:
      const { restaurantId, reviewId } = action.payload;

      return {
        ...restaurants,
        [restaurantId]: {
          ...restaurants[restaurantId],
          reviews: [...restaurants[restaurantId].reviews, reviewId],
        },
      };

    default:
      return restaurants;
  }
};
