import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import Loader from '../loader';
import styles from './reviews.module.css';

import {
  reviewsForRestaurantSelector,
  reviewsForRestaurantLoadedSelector,
  reviewsForRestaurantLoadingSelector,
} from '../../redux/selectors';
import { loadReviews, loadUsers } from '../../redux/actions';

const Reviews = ({ id, reviews, loading, loaded, loadReviews, loadUsers }) => {
  useEffect(() => {
    if (reviews.length === 0 && !loading && !loaded) {
      loadUsers();
      loadReviews(id);
    }
  }, [id, loading, loaded, reviews, loadReviews, loadUsers]);

  if (loading) return <Loader />;
  if (!loaded) return 'No data :(';

  return (
    <div className={styles.reviews}>
      {reviews.map((review) => (
        <Review restId={id} key={review.id} id={review.id} />
      ))}
      <ReviewForm restId={id} />
    </div>
  );
};

Reviews.propTypes = {
  restId: PropTypes.string,
  reviews: PropTypes.array,
};

const mapStateToProps = (state, props) => ({
  reviews: reviewsForRestaurantSelector(state, props),
  loading: reviewsForRestaurantLoadingSelector(state, props),
  loaded: reviewsForRestaurantLoadedSelector(state, props),
});

const mapDispatchToProps = {
  loadReviews,
  loadUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
