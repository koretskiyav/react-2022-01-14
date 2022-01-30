import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import {connect} from "react-redux";

const Reviews = ({ reviews, restaurantId }) => {
  const reviewsArray = Object.values(reviews)
  console.log('REVIEWS')
  return (
    <div className={styles.reviews}>
      {reviewsArray.map((review) => (
        <Review key={review} reviewId={review} restaurantId={restaurantId} />
      ))}
      <ReviewForm restaurantId={restaurantId}/>
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = ( state, props ) => ({
  reviews: state.restaurants[props.restaurantId].reviews,
})

export default connect(mapStateToProps)(Reviews);
