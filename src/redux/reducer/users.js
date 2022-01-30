import { normalizedUsers } from '../../fixtures';

const defaultUsers = Object.fromEntries(
  normalizedUsers.map((user) => [user.id, user])
);

export default (users = defaultUsers, action) => {
  const { type } = action;

  switch (type) {
    default:
      return users;
  }
};
