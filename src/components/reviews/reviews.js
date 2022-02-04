import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import Loader from '../loader';

import { loadReviews, loadUsers } from '../../redux/actions';
import { userLoadingSelector, userLoadedSelector, reviewLoadingSelector, reviewLoadedSelector } from '../../redux/selectors';

const Reviews = ({ reviews, id, loadingUsers, loadedUsers, loadingReviews, loadedReviews, loadUsers, loadReviews }) => {

  useEffect(
    () => !loadedReviews && !loadingReviews && loadReviews(id)
    ,[loadingReviews, loadedReviews, loadReviews, id]
  );

  useEffect(
    () => !loadedUsers && !loadingUsers && loadUsers()
    ,[loadedUsers, loadingUsers, loadUsers]
  );

  return (
    <div className={styles.reviews}>
      {
        (loadedReviews) ? reviews.map((id) => <Review key={id} id={id} />) : <Loader/>
      }
      <ReviewForm id={id} />
    </div>
  );
};

Reviews.propTypes = {
  restId: PropTypes.string,
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const mapStateToProps = (state, props) => ({
  loadingUsers: userLoadingSelector(state),
  loadedUsers: userLoadedSelector(state, props),
  loadingReviews: reviewLoadingSelector(state),
  loadedReviews: reviewLoadedSelector(state, props),
});

const mapDispatchToProps = {
  loadReviews,
  loadUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
