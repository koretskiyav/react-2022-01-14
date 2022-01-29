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
      return {...reviews, [action.values.id]: {
          id: action.values.id,
          userId: action.values.userId,
          text: action.values.text,
          rating: action.values.rating,
      }};
    default:
      return reviews;
  }
};