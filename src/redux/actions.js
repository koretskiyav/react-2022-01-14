import { DECREMENT, INCREMENT, REMOVING } from './reducer/constants';

export const decrement = (id) => ({ type: DECREMENT, id });
export const increment = (id) => ({ type: INCREMENT, id });
export const removing = (id) => ({ type: REMOVING, id });
