import { v4 as uuidv4 } from 'uuid';

import { ADD_REVIEW, ADD_USER } from '../constants';

export default () => (next) => (action) => {
  const { type } = action;
  switch (type) {
    case ADD_REVIEW:
      action.review.id = uuidv4();
      break;
    case ADD_USER:
      action.user.id = uuidv4();
      break;
    default:
  }
  return next(action);
};