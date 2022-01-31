import { normalizedReviews } from '../../fixtures';
import {ADD_REVIEW} from "../constants";

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type } = action;

  switch (type) {
    case ADD_REVIEW:
      return { ...reviews, [reviews.id]: reviews };
    default:
      return reviews;
  }
};
