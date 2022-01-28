import {DECREMENT, DEL_ITEM, INCREMENT} from './reducer/constants';

export const decrement = (id) => ({ type: DECREMENT, id });
export const increment = (id) => ({ type: INCREMENT, id });
export const delItem = (id) => ({ type: DEL_ITEM, id });
