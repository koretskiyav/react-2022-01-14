// import {connect} from 'react-redux';
// import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';


const Reviews = ({ reviews }) => (
  <div className={styles.reviews}>
    {
      reviews.map((id) => <Review key={id} id={id} />)
    }
    <ReviewForm />
  </div>
);

// Reviews.propTypes = {
//   reviews: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
// };

// const mapStateToProps = (state, porps) => {

//   return {
//     reviews: selectReviews(state, props)
//   }
// }

// export default connect(mapStateToProps)(Reviews);
export default Reviews;
