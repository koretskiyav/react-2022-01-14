import { v4 as uuidv4 } from 'uuid';
import { updateRestaurant, updateReview, updateUser } from '../actions';
import { ON_SUBMIT_REVIEW } from '../constants';

export default (store) => (next) => (action) => {
  
  if (action.type === ON_SUBMIT_REVIEW) {
    const {name, rating, text} = action.reviewData

    const userId = uuidv4();
    const userData = {
      id: userId,
      name
    }
    store.dispatch(updateUser(userData))

    const id = uuidv4();
    const reviewData = {
      id,
      userId,
      rating,
      text
    }
    store.dispatch(updateReview(reviewData))

    const restaurantData = store.getState().restaurants[action.restaurantId]
    restaurantData.reviews.push(id)
    store.dispatch(updateRestaurant(restaurantData))
  }
  
  next(action);
};
