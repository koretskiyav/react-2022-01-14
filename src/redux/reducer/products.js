import produce from 'immer';
import {FAILURE, LOAD_PRODUCTS, REQUEST, SUCCESS} from '../constants';
import {arrToMap} from '../utils';

const initialState = {
    entities: {},
    loading:  {},
    loaded:   {},
    error:    {},
};

export default produce((draft = initialState, action) => {
    const {type, restId, data, error} = action;

    switch (type) {
        case LOAD_PRODUCTS + REQUEST:
            draft.loading[restId] = true;
            draft.error[restId] = null;

            break;
        case LOAD_PRODUCTS + SUCCESS:
            draft.entities = {...draft.entities, ...arrToMap(data)};
            draft.loading[restId] = false;
            draft.loaded[restId] = true;

            break;
        case LOAD_PRODUCTS + FAILURE:
            draft.loading[restId] = false;
            draft.loaded[restId] = false;
            draft.error[restId] = error;

            break;
        default:
            return draft;
    }
});
