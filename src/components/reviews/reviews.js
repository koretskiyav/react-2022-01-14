import Review from './review';
import styles from './reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      {reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
    </div>
  );
};

Product.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.PropTypes.shape({
    id: PropTypes.number.isRequired
  })).isRequired
};

export default Reviews;
