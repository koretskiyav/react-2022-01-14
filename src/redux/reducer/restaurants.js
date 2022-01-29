import { normalizedRestaurants } from '../../fixtures';
import {ADD_REVIEW} from "../constants";

const defaultRestaurants = normalizedRestaurants.reduce(
    (acc, restaurants) => ({ ...acc, [restaurants.id]: restaurants }),
    {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type } = action;

  switch (type) {
    case ADD_REVIEW:
      restaurants[action.values.restaurantId].reviews.push(action.values.id)
      return restaurants;
    default:
      return restaurants;
  }
};
