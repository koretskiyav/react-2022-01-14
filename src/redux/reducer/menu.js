import produce from 'immer';
import { FAILURE, LOAD_PRODUCTS, REQUEST, SUCCESS } from '../constants';

const initialState = {
  loading: {},
  loaded: {},
  error: {},
};

export default (state = initialState, action) => {
  const { type, id, error } = action;
  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      return produce(state, (draft) => {
        draft.loading[id] = true;
        draft.loaded[id] = false;
        draft.error[id] = null;
      });
    case LOAD_PRODUCTS + SUCCESS:
      return produce(state, (draft) => {
        draft.loading[id] = false;
        draft.loaded[id] = true;
      });
    case LOAD_PRODUCTS + FAILURE:
      return produce(state, (draft) => {
        draft.loading[id] = false;
        draft.loaded[id] = false;
        draft.error[id] = error;
      });
    default:
      return state;
  }
};
