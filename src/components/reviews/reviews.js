import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      {reviews.map((id) => (
        <Review key={id} id={id} />
      ))}
      <ReviewForm />
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default Reviews;
