import { v4 as uuidv4 } from 'uuid';
import { ADD_REVIEW, ADD_USER } from '../constants';

export default (store) => (next) => (action) => {
  switch(action.type){
    case ADD_USER :
      action.user.id = uuidv4();
      break;
    case ADD_REVIEW :
      action.review.id = uuidv4();
      break;
    default:
  }
  next(action);
};
