import { DECREMENT, INCREMENT, CLEAR_PRODUCT } from './constants';

const clearItem = (state, id) => {
  const newState = {...state};
  delete newState[id];
  return newState;
};

const addItem = (state, {id, ...otherProps}) => {
  if (!state[id]) return {...state, [id]:{amount: 1, ...otherProps}};

  const newstate = {...state};
  newstate[id].amount = state[id].amount + 1;
  return newstate;
};

const removeItem = (state, id) => {
  if (!state[id]) return state;

  if (state[id].amount === 1) return clearItem(state, id);

  const newState = {...state};
  newState[id].amount = state[id].amount - 1;
  return newState;
};

export default function (state = {}, action) {
  const { type, payload} = action;
  switch (type) {
    case INCREMENT:
        return addItem(state, payload);
    case DECREMENT:
      return removeItem(state, payload);
    case CLEAR_PRODUCT:
      return clearItem(state, payload);
    default:
      return state;
  }
};