import { normalizedUsers } from '../../fixtures';
import { UPDATE_USER } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);

export default (users = defaultUsers, action) => {
  const { type, userData } = action;

  switch (type) {
    case UPDATE_USER:
      return { ...users, [userData.id]: userData };
    default:
      return users;
  }
};
