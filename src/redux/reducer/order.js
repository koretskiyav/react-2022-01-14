import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  CHECKOUT,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';
import produce from 'immer';

const initialState = {
  entities: {},
  request: false,
  response: null,
  error: null,
};

// { [productId]: amount }
export default produce((draft = initialState, action) => {
  const { type, id, response, error } = action;
  switch (type) {
    case INCREMENT:
      draft.entities[id] = (draft.entities[id] || 0) + 1;
      break;
    case DECREMENT:
      draft.entities[id] =
        draft.entities[id] > 0 ? (draft.entities[id] || 0) - 1 : 0;
      break;
    case REMOVE:
      draft.entities[id] = 0;
      break;
    case CHECKOUT + REQUEST:
      draft.error = null;
      draft.request = true;
      break;
    case CHECKOUT + SUCCESS:
      draft.request = false;
      response === 'ok' ? (draft.entities = {}) : alert(response);
      break;
    case CHECKOUT + FAILURE: {
      draft.error = error;
      break;
    }
    default:
      return draft;
  }
});
