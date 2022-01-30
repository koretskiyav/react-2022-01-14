import { normalizedReviews } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, review } = action;
  
  if (review) {
    console.log(review);
    console.log({ ...reviews, [review.id]: review });
  }

  switch (type) {
    case ADD_REVIEW:
      return { ...reviews, [review.id]: review };
    default:
      return reviews;
  }
};
