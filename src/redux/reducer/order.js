import produce from 'immer';
import {CREATE_ORDER, DECREMENT, FAILURE, INCREMENT, REMOVE, REQUEST, SUCCESS} from '../constants';

const initialState = {
    cart:       {},
    processing: false,
    error:      '',
};

export default produce((draft = initialState, action) => {
    const {type, id, error} = action;

    switch (type) {
        case INCREMENT:
            draft.cart[id] = (draft.cart[id] || 0) + 1;

            break;
        case DECREMENT:
            draft.cart[id] = draft.cart[id] > 0 ? (draft.cart[id] || 0) - 1 : 0

            break;
        case REMOVE:
            draft.cart[id] = 0;

            break;
        case CREATE_ORDER + REQUEST: {
            draft.processing = true;
            draft.error = null;

            break;
        }
        case CREATE_ORDER + SUCCESS: {
            draft.cart = {};
            draft.processing = false;

            break;
        }
        case CREATE_ORDER + FAILURE: {
            draft.processing = false;
            draft.error = error;

            break;
        }
        default:
            return draft;
    }
});
