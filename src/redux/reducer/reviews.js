import { normalizedReviews } from '../../fixtures';
import { UPDATE_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, reviewData } = action;

  switch (type) {
    case UPDATE_REVIEW:
      return { ...reviews, [reviewData.id]: reviewData };
    default:
      return reviews;
  }
};
