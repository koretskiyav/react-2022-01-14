import Rate from './rate';
import styles from './reviews.module.css';

export default function Reviews({ reviews }) {
  return (
    <div className={styles.reviews}>
      <h2>Отзывы</h2>
      {
        reviews.map(review => (
          <div className={styles.review} key={review.id}>
            <h3>{review.user}</h3>
            <Rate rating={review.rating} />
            <p>{review.text}</p>
          </div>
      ))}
    </div>
  );
}