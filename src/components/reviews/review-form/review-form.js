import { connect } from 'react-redux';

import useForm from '../../../hooks/use-form';
import Rate from '../../rate';
import Button from '../../button';

import styles from './review-form.module.css';

import { add_review, add_user, add_review_id } from '../../../redux/actions';

const INITIAL_VALUES = { name: '', text: '', rating: 3 };

const ReviewForm = ({ restaurantId, onSubmit }) => {
  const { values, handlers, reset } = useForm(INITIAL_VALUES);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit(values, restaurantId);
    reset();
  };

  return (
    <div className={styles.reviewForm}>
      <h4 className={styles.addReviewTitle}>Leave your review</h4>
      <form onSubmit={handleSubmit}>
        <div className={styles.reviewFormItem}>
          <input
            placeholder="Your name"
            className={styles.message}
            {...handlers.name}
          />
        </div>
        <div className={styles.reviewFormItem}>
          <textarea
            placeholder="Your review"
            className={styles.message}
            {...handlers.text}
          />
        </div>
        <div className={styles.rateWrap}>
          <span>Rating: </span>
          <span>
            <Rate {...handlers.rating} />
          </span>
        </div>
        <div className={styles.publish}>
          <Button primary block>
            PUBLISH REVIEW
          </Button>
        </div>
      </form>
    </div>
  );
};

export default connect(null, (dispatch) => ({
  onSubmit: (values, restaurantId) => {
    const user = {id:'', name: values.name};
    dispatch(add_user(user));
    const review = {userId: user.id, text: values.text, rating: values.rating};
    dispatch(add_review(review));
    dispatch(add_review_id(restaurantId, review.id));
  }, // TODO
}))(ReviewForm);
