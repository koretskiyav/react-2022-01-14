import { normalizedRestaurants } from '../../fixtures';
import { REVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({...acc, [restaurant.id]: restaurant}),
  {}
)
export default (restaurants = defaultRestaurants, action) => {
  const { type, review } = action;

  switch (type) {
    case REVIEW:
      return {...restaurants, [review.restaurantId]: {...restaurants[review.restaurantId], reviews: [...restaurants[review.restaurantId].reviews, review.id]}}
    default:
      return restaurants;
  }
};
