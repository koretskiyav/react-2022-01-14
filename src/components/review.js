import styles from './review.module.css';

export default function Review({ review }) {
  return (
    <div className={styles.card}>
      <p>User: {review.user}</p>
      <p>Comment: {review.text}</p>
      <p>Rating: {review.rating}</p>
    </div>
  );
}
