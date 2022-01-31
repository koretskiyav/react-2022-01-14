import { normalizedUsers } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);

export default (users = defaultUsers, action) => {
  const { type, values, userId } = action;

  switch (type) {
    case ADD_REVIEW:
      return { ...users, [userId]: { id: userId, name: values.name, } };
    default:
      return users;
  }
};
