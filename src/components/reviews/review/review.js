import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';
import {connect} from "react-redux";

const Review = ({ user, text, rating }) => (
  <div className={styles.review} data-id="review">
    <div className={styles.content}>
      <div>
        <h4 className={styles.name} data-id="review-user">
          {user}
        </h4>
        <p className={styles.comment} data-id="review-text">
          {text}
        </p>
      </div>
      <div className={styles.rate}>
        <Rate value={rating} />
      </div>
    </div>
  </div>
);

Review.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number.isRequired,
};

Review.defaultProps = {
  user: 'Anonymous',
};

const mapStateToProps = (state, props) => ({
  user: state.users[state.reviews[props.reviewId].userId].name,
  text: state.reviews[props.reviewId].text,
  rating: state.reviews[props.reviewId].rating,
})

export default connect(mapStateToProps)(Review);
