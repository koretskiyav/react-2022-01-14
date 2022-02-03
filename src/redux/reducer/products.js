import { arrToMap } from '../utils';
import { FAILURE, LOAD_PRODUCTS, REQUEST, SUCCESS } from '../constants';

export default (state = {}, action) => {
  const { type, id, data, error } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      return {
        ...state,
        [id]: {
          entities: {},
          loading: true,
          loaded: false,
          error: null,
        },
      };
    case LOAD_PRODUCTS + SUCCESS:
      return {
        ...state,
        [id]: {
          entities: arrToMap(data),
          loading: false,
          loaded: true,
          error: null,
        },
      };
    case LOAD_PRODUCTS + FAILURE:
      return {
        ...state,
        [id]: {
          loading: false,
          loaded: false,
          error,
        },
      };
    default:
      return state;
  }
};
