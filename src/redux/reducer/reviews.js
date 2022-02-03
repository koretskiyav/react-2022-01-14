import {
  ADD_REVIEW,
  LOAD_REVIEWS,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: {},
  error: null,
};

export default (state = initialState, action) => {
  const { type, review, reviewId, userId, data, error, restId } = action;

  switch (type) {
    case ADD_REVIEW:
      const { text, rating } = review;
      return {
        ...state,
        [reviewId]: { id: reviewId, userId, text, rating },
      };
    case LOAD_REVIEWS + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_REVIEWS + SUCCESS:
      return {
        ...state,
        entities: {...state.entities, ...arrToMap(data) },
        loading: false,
        loaded: {...state.loaded, [restId]: true},
      };
    case LOAD_REVIEWS + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: {...state.loaded, [restId]: false},
        error,
      };
    default:
      return state;
  }
};
