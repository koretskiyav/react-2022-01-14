import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

import {loadReviews, loadUsers} from '../../redux/actions';
import Loader from "../loader";
import {
  reviewsRestaurantLoadedSelector,
  reviewsRestaurantLoadingSelector, usersLoadedSelector,
  usersLoadingSelector
} from "../../redux/selectors";

const Reviews = ({ reviews, restId, loading, loaded, loadReviews, usersLoading, usersLoaded, loadUsers }) => {
  useEffect(() => {
    if (!loading && !loaded) loadReviews(restId);
    if (!usersLoading && !usersLoaded) loadUsers();

  }, [loading, loaded, restId, loadReviews, usersLoading, usersLoaded, loadUsers]);

  if (loading || usersLoading) return <Loader />;
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

const mapStateToProps = (state, props) => ({
  loading: reviewsRestaurantLoadingSelector(state, props),
  loaded: reviewsRestaurantLoadedSelector(state, props),
  usersLoading: usersLoadingSelector(state, props),
  usersLoaded: usersLoadedSelector(state, props),
});

const mapDispatchToProps = {
  loadReviews,
  loadUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
