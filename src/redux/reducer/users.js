import { normalizedUsers } from '../../fixtures'

const defaultUsers = normalizedUsers.reduce((acc, user) => ({
  ...acc, [user.id]: user
}), {})

export default (state = defaultUsers, action) => {
  const { type } = action
  switch (type) {
    default:
      return state
  }
}