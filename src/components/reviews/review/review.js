import propTypes from 'prop-types';
import Rate from '../../rate';
import styles from './review.module.css';

const Review = ({ user, text, rating }) => (
  <div className={styles.review}>
    <div className={styles.content}>
      <div>
        <h4 className={styles.name}>{user}</h4>
        <p className={styles.comment}>{text}</p>
      </div>
      <div className={styles.rate}>
        <Rate value={rating} />
      </div>
    </div>
  </div>
);

Review.propTypes = {
  user: propTypes.string,
  text: propTypes.string
};

Review.defaultProps = {
  user: 'Anonymous',
};

export default Review;
