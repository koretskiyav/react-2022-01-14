import {
  FAILURE,
  LOAD_PRODUCTS,
  REQUEST,
  SUCCESS,
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: {},
  error: null,
};

export default (state = initialState, action) => {
  const { type, data, error, restId } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_PRODUCTS + SUCCESS:
      return {
        ...state,
        entities: {...state.entities, ...arrToMap(data) },
        loading: false,
        loaded: {...state.loaded, [restId]: true},
      };
    case LOAD_PRODUCTS + FAILURE:
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
