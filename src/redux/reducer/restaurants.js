import produce from 'immer';
import { ADD_REVIEW, LOAD_RESTAURANTS } from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
};

export default (state = initialState, action) => {
  const { type, restId, reviewId, data } = action;

  switch (type) {
    case LOAD_RESTAURANTS:
      return { ...state, entities: arrToMap(data) };
    case ADD_REVIEW:
      return produce(state, (draft) => {
        draft.entities[restId].reviews.push(reviewId);
      });
    default:
      return state;
  }
};
