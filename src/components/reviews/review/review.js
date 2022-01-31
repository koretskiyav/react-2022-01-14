import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Rate from '../../rate';
import styles from './review.module.css';

const Review = ({ review, user }) => (
  <div className={styles.review} data-id="review">
    <div className={styles.content}>
      <div>
        <h4 className={styles.name} data-id="review-user">
          {user.name}
        </h4>
        <p className={styles.comment} data-id="review-text">
          {review.text}
        </p>
      </div>
      <div className={styles.rate}>
        <Rate value={review.rating} />
      </div>
    </div>
  </div>
);

Review.propTypes = {
  user: PropTypes.string,
  review: PropTypes.shape({
    text: PropTypes.string,
    rating: PropTypes.number.isRequired,
  }).isRequired 
};

Review.defaultProps = {
  user: 'Anonymous',
};

const mapStateToProps = (state, props) => ({
  user: state.users[state.reviews[props.id].userId],
  review: state.reviews[props.id],
});

export default connect(mapStateToProps)(Review);
