import {ADD_COMMENT} from "../constants";

export default (state={}, action) => {
  const { type } = action
  switch (type) {
    case ADD_COMMENT:
      const { values } = action
      const { name, text, rating } = values
      return {...state, name, text, rating }
    default:
      return state
  }
}