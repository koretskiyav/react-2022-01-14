import { v4 as uuid } from 'uuid';
import { ADD_REVIEW, ADD_USER } from '../constants';

export default (store) => (next) => (action) => {
  const { type } = action;
  switch (type) {
    case ADD_REVIEW:
      action.review.id = uuid();
      break;
    case ADD_USER:
      action.user.id = uuid();
      break;
  }
  return next(action);
};
