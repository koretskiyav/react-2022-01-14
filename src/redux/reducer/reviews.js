import { normalizedReviews } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, values, id, userId } = action;

  switch (type) {
    case ADD_REVIEW:
      return { ...reviews, [id]: { id, userId, text: values.text, rating: values.rating } };
    default:
      return reviews;
  }
};
