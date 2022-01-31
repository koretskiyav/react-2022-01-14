import { normalizedReviews as defaultReviews } from './fixtures';

const INITIAL_STATE = defaultReviews.reduce((acc, {id, ...otherData}) => ({...acc, [id]: {...otherData}}) ,{});

export default (state = INITIAL_STATE, action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};
