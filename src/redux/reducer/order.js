import produce from 'immer';
import { 
  DECREMENT, 
  FAILURE, 
  INCREMENT, 
  REMOVE, 
  REQUEST, 
  SEND_ORDER, 
  SUCCESS } from '../constants';

const initialState = {
  entities: {},
  sending: false,
  sended: false,
  answer: null,
  error: null,
}

// { [productId]: amount }
export default (state = initialState, action) =>
  produce(state, (draft) => {
    const { type, id, response, error } = action;
    switch (type) {
      case INCREMENT: { 
        draft.entities[id] = (draft.entities[id] || 0) + 1
        break;  
      }
      case DECREMENT: {
        draft.entities[id] = draft.entities[id] > 0 ? draft.entities[id] - 1 : 0 
        break;
      }
      case REMOVE: { 
        draft.entities[id] = 0
        break;  
      }
      case SEND_ORDER + REQUEST: {
        draft.sending = true;
        draft.error = null;
        draft.answer = null;
        break; 
      }
      case SEND_ORDER + SUCCESS: {
        draft.sending = false;
        if(response !== 'ok') {
          draft.error = response;
        } else {
          draft.answer = 'Спасибо за закааз!';
          draft.entities = {};
        }
        draft.sended = true;
        break; 
      }
      case SEND_ORDER + FAILURE: {
        draft.sended = false;
        draft.error = error;
        break; 
      }
      default:
        return ;
    }
  });