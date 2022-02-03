import produce from 'immer';
import {
  ADD_REVIEW,
  FAILURE,
  LOAD_REVIEWS,
  REQUEST,
  SUCCESS,
} from '../constants';
import { arrToMap } from '../utils';

export default produce((draft = {}, action) => {
  const { type, review, reviewId, userId, id, data, error } = action;
  switch (type) {
    case LOAD_REVIEWS + REQUEST:
      draft[id] = {
        entities: {},
        loading: true,
        loaded: false,
        error: null,
      };
      break;
    case LOAD_REVIEWS + SUCCESS:
      draft[id] = {
        entities: arrToMap(data),
        loading: false,
        loaded: true,
        error: null,
      };
      break;
    case LOAD_REVIEWS + FAILURE:
      draft[id].loading = false;
      draft[id].loaded = false;
      draft[id].error = error;
      break;
    case ADD_REVIEW:
      const { text, rating } = review;
      draft[id].entities[reviewId] = { id: reviewId, userId, text, rating };
      break;
    default:
      return draft;
  }
});
