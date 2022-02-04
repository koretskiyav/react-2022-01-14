import { arrToMap } from '../utils';
import {
  LOAD_PRODUCTS,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../index.js';


const INITIAL_STATE = {
  entities: {},
  restaurants: {},
  loading: false,
  error: null,
}

export default (state = INITIAL_STATE, action) => {
  const { type, data, error } = action;

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
        entities: {...state.entities, ...arrToMap(data)},
        restaurants: {...state.restaurants, [action.id]: true},
        loading: false,
        error: null,
        };
    case LOAD_PRODUCTS + FAILURE:
      return {
        ...state,
        loading: false,
        error,
      }
    default:
      return state;
  }
};
