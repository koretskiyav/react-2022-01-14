import { v4 as uuidv4 } from 'uuid';

import { REVIEW_ADD } from '../constants';
import { createReview, createUser, restaurantsAddReview } from '../actions';

export default (store) => (next) => (action) => {
  if (action.type !== REVIEW_ADD) {
    return;
  }

  const userId = uuidv4();
  const reviewId = uuidv4();

  const payload = {
    ...action.payload,
    userId,
    id: reviewId,
  };

  next(createReview(payload));
  next(createUser({ id: userId, name: action.payload.name }));
  next(
    restaurantsAddReview({
      reviewId,
      restaurantId: action.payload.restaurantId,
    })
  );
};
