import { DECREMENT, INCREMENT, CLEAR_PRODUCT } from './constants';

const clearItem = (state, id) => {
  const newState = {...state};
  delete newState[id];
  return newState;
};

const addItem = (state, {id, ...otherProps}) => {
  if (!state[id]) return {...state, [id]:{amount: 1, ...otherProps}};
  return {...state, [id]:{...state[id], amount: state[id].amount + 1}};
};

const removeItem = (state, id) => {
  if (!state[id]) return state;

  if (state[id].amount === 1) return clearItem(state, id);
  // if (state[id].amount < 1) return {...state, [id]:{...state[id], amount: 0}}; // вариант 2(без удаления)
  
  return {...state, [id]:{...state[id], amount: state[id].amount - 1}};
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