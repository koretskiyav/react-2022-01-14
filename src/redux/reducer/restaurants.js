import produce from 'immer';
import {
  ADD_REVIEW,
  SET_ACTIVE_RESTAURANT,
  LOAD_RESTAURANTS,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../index';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default (state = initialState, action, ...rest) => {
  const { type, restId, reviewId, data, error } = action;

  switch (type) {
    case LOAD_RESTAURANTS + REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null,
      };
    case LOAD_RESTAURANTS + SUCCESS:
      const activeId = data[0].id;
      const entities = arrToMap(data);
      return {
        ...state,
        entities: entities,
        loading: false,
        loaded: true,
        activeId: activeId,
      };
    case LOAD_RESTAURANTS + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
    case SET_ACTIVE_RESTAURANT:
      return {
        ...state,
        activeId: action.activeId,
      };
    case ADD_REVIEW:
      return produce(state, (draft) => {
        draft.entities[restId].reviews.push(reviewId);
      });
    default:
      return state;
  }
};
