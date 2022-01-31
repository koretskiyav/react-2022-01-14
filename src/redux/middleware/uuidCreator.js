import { v4 as uuidv4 } from 'uuid';
import { COMMENT } from '../constants';
import {addUser, addReview } from '../actions';

export default (store) => (next) => (action) => {
  if (action.type === COMMENT) {
    action.comment.id = uuidv4()
    const newUserId = uuidv4()
    store.dispatch(addUser({[newUserId]: {id: newUserId, name: action.comment.name}}))
    store.dispatch(addReview({restaurantId: action.comment.restaurantId, id: action.comment.id}))
    action.comment.userId = newUserId
    delete action.comment.name
    next(action)
  }
  next(action)
};
