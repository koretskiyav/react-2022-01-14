import produce from 'immer';
import { LOAD_PRODUCTS, FAILURE, REQUEST, SUCCESS } from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default (state = initialState, action) => {
  const { type, restId, data, error } = action;
  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null,
      };
    case LOAD_PRODUCTS + SUCCESS:
      return {
        ...state,
        entities: arrToMap(data),
        loading: false,
        loaded: true,
      };
    case LOAD_PRODUCTS + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
    default:
      return state;
  }
};
