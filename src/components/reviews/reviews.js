import Review from './review';
import styles from './reviews.module.css';
import PropTypes from "prop-types";

const Reviews = ({ reviews }) => {
  return (
    <div data-id="reviews" className={styles.reviews}>
      {reviews.map((review) => (
        <Review data-id="reviews-item" key={review.id} {...review} />
      ))}
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired
}
export default Reviews;
