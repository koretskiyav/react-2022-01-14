import PropTypes from 'prop-types';

import Review from './review';

import styles from './reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews} data-id="reviews-root">
      {reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.PropTypes.shape({
    id: PropTypes.string.isRequired
  })).isRequired
};

export default Reviews;
