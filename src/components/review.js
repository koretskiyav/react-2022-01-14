import Rate from './rate';
import styles from './review.module.css';

export default function Review({ review }) {
  return (
    <div className={styles.card}>
      <div>
        <b>Comment:</b> {review.text} 
        <span className={styles.floatRight}> <Rate value={review.rating}/></span>
      </div>
      <p><b>From user:</b> {review.user}</p>
    </div>
  );
}
