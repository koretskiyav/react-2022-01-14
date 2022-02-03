import {ADD_REVIEW, FAILURE, LOAD_REVIEWS, REQUEST, SUCCESS} from '../constants';
import { arrToMap } from '../utils';
import produce from "immer";

const initialState = {
  entities: {},
  loading: {},
  loaded: {},
  error: {},
};

export default (state = initialState, action) => {

  const { type, review, reviewId, userId, restId, data } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST:
      return produce( state, (draft) => {
        draft.loading[restId] = true;
        draft.error[restId] = null;
      });
    case LOAD_REVIEWS + SUCCESS:
      return produce(state, (draft) => {
        draft.entities = Object.assign(draft.entities, arrToMap(data));
        draft.loading[restId] = false;
        draft.loaded[restId] = true;
      });
    case LOAD_REVIEWS + FAILURE:
      return produce(state, (draft) => {
        draft.loading[restId] = false;
        draft.loaded[restId] = false;
      });
    case ADD_REVIEW:
      const { text, rating } = review;
      return {
        ...state,
        [reviewId]: { id: reviewId, userId, text, rating },
      };
    default:
      return state;
  }
};
