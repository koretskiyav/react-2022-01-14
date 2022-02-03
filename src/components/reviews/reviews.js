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
 } from '../../redux/selectors';

const Reviews = ({
  reviews,
  restId,
  loadReviews,
  loadUsers,
  loading,
  loaded,
}) => {
  useEffect(() => {
    if (!loading && !loaded[restId]) {
      loadUsers();
      loadReviews(restId);
    }
  }, [restId, loadReviews, loading, loaded, loadUsers]);

  // useEffect(() => {
  //   if (!loading && !loaded) loadUsers();
  // },[loadUsers, loading, loaded]);

  if (loading) return <Loader />;
  if (!loaded) return 'No data :(';

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
  loading: reviewsLoadingSelector(state),
  loaded: reviewsLoadedSelector(state),
});

const mapDispatchToProps = {
  loadReviews,
  loadUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
