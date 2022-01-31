import { normalizedUsers } from '../../fixtures';
import { ADD_USER } from '../constants';

const defaultUsers = Object.fromEntries(
  normalizedUsers.map((user) => [user.id, user])
);

export default (users = defaultUsers, action) => {
  const { type } = action;

  switch (type) {
    case ADD_USER:
      const { name, id, callback } = action;
      callback(id);
      return { ...users, [id]: { name, id } };
    default:
      return users;
  }
};
