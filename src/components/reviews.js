import Rate from './rate';
import styles from './reviews.module.css';

export default function Reviews({ reviews }) {
  return (
    <div>
      {reviews.map((review) => {
        return (
          <div key={review.id} className={styles.card}>
            <div>
              <p className={styles.card__user}>{review.user}</p>
              <p>{review.text}</p>
            </div>
            <div className={styles.card__rating}>
              <Rate value={review.rating} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
