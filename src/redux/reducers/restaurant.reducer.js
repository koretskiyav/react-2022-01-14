import {normalizedRestaurants as defaultRestaurants} from './fixtures';
import { SET_ACTIVE_ID } from '../constants';

const INITIAL_STATE = {activeId: defaultRestaurants[0].id};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ACTIVE_ID:
      return { ...state, activeId: action.id};
    default:
      return state;
  }
}
