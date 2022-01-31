import { normalizedReviews } from '../../fixtures';
import { POST_REVIEW } from '../constants';

const defaultReviews = Object.fromEntries(
  normalizedReviews.map((review) => [review.id, review])
);

export default (reviews = defaultReviews, action) => {
  const { type, data, id } = action;

  switch (type) {
    case POST_REVIEW:
      return { ...reviews, [id]: { ...data, id } };
    default:
      return reviews;
  }
};
