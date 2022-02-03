import { arrToMap } from '../utils';
import {FAILURE, LOAD_PRODUCTS, REQUEST, SUCCESS} from "../constants";
import produce from "immer";

const initialState = {
  entities: {},
  loading: {},
  loaded: {},
  error: {},
};

export default (state = initialState, action) => {
  const { type, restId, data } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      return produce( state, (draft) => {
        draft.loading[restId] = true;
        draft.error[restId] = null;
      });
    case LOAD_PRODUCTS + SUCCESS:
      return produce(state, (draft) => {
        draft.entities = Object.assign(draft.entities, arrToMap(data));
        draft.loading[restId] = false;
        draft.loaded[restId] = true;
      });
    case LOAD_PRODUCTS + FAILURE:
      return produce(state, (draft) => {
        draft.loading[restId] = false;
        draft.loaded[restId] = false;
      });
    default:
      return state;
  }
};
