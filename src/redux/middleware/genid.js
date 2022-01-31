import { v4 as uuidv4 } from 'uuid';

export default (store) => (next) => (action) => {
  if (action.type == 'ONSUBMIT') {
    action.values.userId = uuidv4();
    action.values.reviewId = uuidv4();
    // или надо использовать ФП?
  }
  next(action);
};
