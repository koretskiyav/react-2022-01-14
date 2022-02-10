import produce from 'immer';
import {
  CHECKOUT,
  DECREMENT,
  INCREMENT,
  REMOVE,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';

const initialState = {
  entities: {},
  loading: false,
  error: null,
};

// { [productId]: amount }
export default (state = initialState, action) =>
  produce(state, (draft) => {
    const { type, id, error } = action;
    const amount = draft.entities[id];

    switch (type) {
      case CHECKOUT + REQUEST:
        draft.loading = true;
        draft.error = null;
        break;
      case CHECKOUT + SUCCESS:
        draft.entities = {};
        draft.loading = false;
        break;
      case CHECKOUT + FAILURE:
        draft.loading = false;
        draft.error = error;
        break;
      case INCREMENT:
        if (!draft.loading) {
          draft.entities[id] = (amount || 0) + 1;
        }
        break;
      case DECREMENT:
        if (!draft.loading) {
          draft.entities[id] = amount > 0 ? (amount || 0) - 1 : 0;
        }
        break;
      case REMOVE:
        if (!draft.loading) {
          draft.entities[id] = 0;
        }
        break;
      default:
        return state;
    }

    if (draft.loading) return;

    switch (type) {
    }
  });
