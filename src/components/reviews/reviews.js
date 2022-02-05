import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import Loader from '../loader';
import styles from './reviews.module.css';

import { loadReviews, loadUsers } from '../../redux/actions';
import {
  areReviewsLoadedSelector,
  areReviewsLoadingSelector,
  usersLoadedSelector,
  usersLoadingSelector,
} from '../../redux/selectors';

const Reviews = ({
  reviews,
  restId,
  reviewsLoading,
  reviewsLoaded,
  usersLoading,
  usersLoaded,
  loadReviews,
  loadUsers,
}) => {
  useEffect(() => {
    if (!reviewsLoaded) {
      loadReviews(restId);
    }
  }, [restId, loadReviews, reviewsLoaded]);

  useEffect(() => {
    if (!usersLoaded) {
      loadUsers();
    }
  });

  if (reviewsLoading || usersLoading) {
    return <Loader />;
  }

  if (!reviewsLoaded || !usersLoaded) {
    return 'No reviews data';
  }

  return (
    <div className={styles.reviews}>
      {reviews.map((id) => (
        <Review key={id} id={id} />
      ))}
      <ReviewForm restId={restId} />
    </div>
  );
};

Reviews.propTypes = {
  restId: PropTypes.string,
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const mapStateToProps = (state, props) => ({
  reviewsLoading: areReviewsLoadingSelector(state, props),
  reviewsLoaded: areReviewsLoadedSelector(state, props),
  usersLoading: usersLoadingSelector(state, props),
  usersLoaded: usersLoadedSelector(state, props),
});

const mapDispatchToProps = {
  loadReviews,
  loadUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
