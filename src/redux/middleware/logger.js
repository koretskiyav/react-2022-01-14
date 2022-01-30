import {ADD_COMMENT} from "../constants";
import {v4 as uuidv4} from "uuid";

export default (store) => (next) => (action) => {
  if( action.type === ADD_COMMENT ){
    const state = store.getState()
    const { name, text, rating } = action.values

    const generateId = uuidv4()
    const generatedUserId = uuidv4()

    state.lastComment.id = generateId
    state.restaurants[action.restaurantId].reviews.push(generateId)
    state.users[generatedUserId] = {
      id: generatedUserId,
      name,
    }
    state.reviews[generateId] = {
      id: generateId,
      userId: generatedUserId,
      text,
      rating,
    }
  }
  next(action);
};
