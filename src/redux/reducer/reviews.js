import { normalizedReviews } from '../../fixtures';

const defaultReviews = Object.fromEntries(
  normalizedReviews.map((review) => [review.id, review])
);

export default (reviews = defaultReviews, action) => {
  const { type } = action;

  switch (type) {
    default:
      return reviews;
  }
};
