import { combineReducers } from 'redux';
import restaurants from './reducers/restaurants.reducer';
import restaurant from './reducers/restaurant.reducer';
import products from './reducers/products.reducer';
import reviews from './reducers/reviews.reducer';
import users from './reducers/users.reducer';
import order from './reducers/order.reducer';

export default combineReducers({
  restaurants,
  restaurant,
  products,
  reviews,
  users,
  order,
});
