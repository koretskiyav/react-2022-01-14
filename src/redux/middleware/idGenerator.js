import {v4 as uuid} from 'uuid';

import {addReview, addUser} from '../actions';
import {ADD_REVIEW} from '../constants';

export default (store) => (next) => (action) => {
    const {type} = action;

    switch (type) {
        case ADD_REVIEW:
            const {review: {restaurantId, name, text, rating,},} = action;

            const userId = uuid();
            const reviewId = uuid();

            const user = {id: userId, name,};
            const review = {id: reviewId, restaurantId, userId, text, rating,};

            const userAction = addUser(user);
            const reviewAction = addReview(review);

            next(userAction);
            next(reviewAction);

            break;

        default:
            next(action);
    }
};