import { normalizedUsers as defaultUsers } from './fixtures';

const INITIAL_STATE = defaultUsers.reduce((acc, {id, ...otherData}) => ({...acc, [id]: {...otherData}}) ,{});

export default (state = INITIAL_STATE, action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};