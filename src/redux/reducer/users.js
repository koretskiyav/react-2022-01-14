import { normalizedUsers } from '../../fixtures';
import { ONSUBMIT } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, users) => ({ ...acc, [users.id]: users }),
  {}
);

export default (users = defaultUsers, action) => {
  const { type, values } = action;

  switch (type) {
    case ONSUBMIT:
      return {
        ...users,
        [values.userId]: { id: values.userId, name: values.name },
      };
    default:
      return users;
  }
};
