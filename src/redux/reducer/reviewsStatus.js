import produce from 'immer';
import { FAILURE, LOAD_REVIEWS, REQUEST, SUCCESS } from '../constants';

const initialState = {
  loading: {},
  loaded: {},
  error: null,
};

export default (state = initialState, action) => {
  const { type, restId, error } = action;
  switch (type) {
    case LOAD_REVIEWS + REQUEST:
      return produce(state, (draft) => {
        draft.loading[restId] = true;
        draft.loaded[restId] = false;
        draft.error[restId] = null;
      });
    case LOAD_REVIEWS + SUCCESS:
      return produce(state, (draft) => {
        draft.loading[restId] = false;
        draft.loaded[restId] = true;
      });
    case LOAD_REVIEWS + FAILURE:
      return produce(state, (draft) => {
        draft.loading[restId] = false;
        draft.loaded[restId] = false;
        draft.error[restId] = error;
      });
    default:
      return state;
  }
};
