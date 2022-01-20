import styles from './reviews.module.css';
import Rate from './rate';

function Reviews({ reviews, averageRating }) {
  return (
    <div>
      {reviews.map(review => (
        <div key={review.id} className={styles.review}>
          <p>{review.user}</p>
          <p>{review.text}</p>
          <Rate value={review.rating} />
        </div>
      ))}
      <div className={styles.average}>
        <p>Average rating</p>
        <Rate value={averageRating} />
      </div>
    </div>
  );
}

export default Reviews;
