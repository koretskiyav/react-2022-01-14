import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import Loader from '../loader';

import { loadReviews, loadUsers } from '../../redux/actions';
import {
  reviewsLoadingSelector,
  reviewsLoadedSelector,
  usersLoadingSelector,
  usersLoadedSelector,
 } from '../../redux/selectors';

const Reviews = ({
  reviews,
  restId,
  loadReviews,
  loadUsers,
  loadingReviews,
  loadedReviews,
  loadingUsers,
  loadedUsers,
}) => {
  useEffect(() => {
    if (!loadingReviews && !loadedReviews[restId]) loadReviews(restId);
  },[restId, loadReviews, loadingReviews, loadedReviews]);

  useEffect(() => {
    if (!loadingUsers && !loadedUsers) loadUsers();
  },[loadUsers, loadingUsers, loadedUsers]);

  if (loadingReviews && loadingUsers) return <Loader />;
  if (!loadedReviews || !loadedUsers) return 'No data :(';

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

const mapStateToProps = (state) => ({
  loadingReviews: reviewsLoadingSelector(state),
  loadedReviews: reviewsLoadedSelector(state),
  loadingUsers: usersLoadingSelector(state),
  loadedUsers: usersLoadedSelector(state),
});

const mapDispatchToProps = {
  loadReviews,
  loadUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
