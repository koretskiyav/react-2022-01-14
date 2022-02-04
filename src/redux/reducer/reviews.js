import { ADD_REVIEW, REQUEST, SUCCESS, FAILURE, LOAD_REVIEWS } from '../index';
import { arrToMap } from '../utils';

const INITIAL_STATE = {
  entities: {},
  restaurants: {},
  loading: false,
  loaded: false,
  error: null,
}

export default (state = INITIAL_STATE, action) => {
  const { type, review, reviewId, userId, error, data, id } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST:
      return {
          ...state,
          loading: true,
          loaded: false,
          error: null,
        }
    case LOAD_REVIEWS + SUCCESS:
      return {
        ...state,
        entities: {...state.entities, ...arrToMap(data)},
        restaurants: {...state.restaurants, [id]: true},
        loading: false,
        loaded: true,
        error: null
      }
    case LOAD_REVIEWS + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: error
      }
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
