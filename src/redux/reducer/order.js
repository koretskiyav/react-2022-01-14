import produce from 'immer';
import {CHECKOUT_SUCCESS, DECREMENT, FAILURE, INCREMENT, REMOVE, REQUEST, SEND_CHECKOUT, SUCCESS} from '../constants';

const initialState = {
  entities: {},
  loading: false,
  message: null,
  error: null,
};

export default produce((draft = initialState, action) => {
  const { type, id, data, error} = action;
  switch (type) {
    case INCREMENT:
      if (draft.loading) break;
      draft.entities[id] = (draft.entities[id] || 0) + 1;
      break;
    case DECREMENT:
      if (draft.loading) break;
      draft.entities[id] = draft.entities[id] > 0 ? (draft.entities[id] || 0) - 1 : 0;
      break;
    case REMOVE:
      if (draft.loading) break;
      draft.entities[id] = 0;
      break;
    case SEND_CHECKOUT + REQUEST: {
      draft.error = null;
      draft.message = null;
      draft.loading = true;
      break;
    }
    case SEND_CHECKOUT + SUCCESS: {
      draft.loading = false;
      if (data !== 'ok') {
        draft.error = data;
      }
      else {
        draft.entities = {};
        draft.message = CHECKOUT_SUCCESS;
      }
      break;
    }
    case SEND_CHECKOUT + FAILURE: {
      draft.loading = false;
      draft.error = error;
      break;
    }
    default:
      return draft;
  }
});
