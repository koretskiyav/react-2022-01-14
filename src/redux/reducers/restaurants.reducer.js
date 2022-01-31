import { normalizedRestaurants as defaultRestaurants } from './fixtures';

const INITIAL_STATE = defaultRestaurants.reduce(
  (acc, restaurant) => ({...acc, [restaurant.id]:restaurant}), {}
);

export default (state = INITIAL_STATE, action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};
