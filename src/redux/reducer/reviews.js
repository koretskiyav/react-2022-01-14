import { normalizedReviews } from '../../fixtures';
import { CREATE_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_REVIEW:
      const { name, id, text, userId, rating } = payload;
      return {
        ...reviews,
        [id]: {
          id,
          name,
          text,
          userId,
          rating,
        },
      };
    default:
      return reviews;
  }
};
