import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';

const Review = ({ user, text, rating }) => (
  <div className={styles.review} data-id="review">
    <div className={styles.content} data-id="review-content">
      <div>
        <h4 className={styles.name}>{user}</h4>
        <p className={styles.comment}>{text}</p>
      </div>
      <div className={styles.rate} data-id="review-rate">
        <Rate value={rating} />
      </div>
    </div>
  </div>
);

Review.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string,
}

Review.defaultProps = {
  user: 'Anonymous',
};

export default Review;
