import {normalizedRestaurants} from '../../fixtures';
import {ADD_REVIEW} from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
    (acc, restaurant) => ({...acc, [restaurant.id]: restaurant}),
    {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type } = action;

  switch (type) {
    case ADD_REVIEW:
      const {review: {id, restaurantId}} = action;

      return {
        ...restaurants,
        [restaurantId]: {
          ...restaurants[restaurantId],
          reviews: [...restaurants[restaurantId].reviews, id]
        }
      }
    default:
      return restaurants;
  }
};