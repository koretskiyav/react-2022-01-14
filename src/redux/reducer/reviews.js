import { normalizedReviews } from '../../fixtures';
import { COMMENT } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, comment } = action;

  switch (type) {
    case COMMENT:
      return { ...reviews, [comment.id]: comment};
    default:
      return reviews;
  }
};
