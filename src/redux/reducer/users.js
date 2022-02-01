import { normalizedUsers } from '../../fixtures';
import { CREATE_USER } from '../constants';

const defaultUsers = normalizedUsers.reduce((acc, user) => {
  return { ...acc, [user.id]: user };
}, {});

export default (users = defaultUsers, action) => {
  const { type } = action;
  switch (type) {
    case CREATE_USER:
      const { id, name } = action.payload;
      return {
        ...users,
        [id]: {
          id,
          name,
        },
      };
    default:
      return users;
  }
};
