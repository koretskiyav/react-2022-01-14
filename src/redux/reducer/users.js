import { ADD_REVIEW, LOAD_USERS, REQUEST, SUCCESS, FAILURE } from '..';
import { arrToMap } from '../utils';


const INITIAL_STATE = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
}

export default (state = INITIAL_STATE, action) => {
  const { type, review, userId, data, error } = action;

  switch (type) {
    case LOAD_USERS + REQUEST:
      return {
          ...state,
          loading: true,
          loaded: false,
          error: null,
        }
    case LOAD_USERS + SUCCESS:
      const res = arrToMap(data);
      return {
        ...state,
        entities: res,
        loading: false,
        loaded: true,
        error: null
      }
    case LOAD_USERS + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: error
      }
    case ADD_REVIEW:
      const { name } = review;
      return {
        ...state,
        entities: {...state.entities, [userId]: { id: [userId], name: [name] }}
      }
    default:
      return state;
  }
};