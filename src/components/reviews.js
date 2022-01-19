import Rate from './rate';
import styles from './reviews.module.css';

export default function Reviews({ reviews }) {
  return (
    <div>
      {reviews.map(({ user, text, rating }) => (
        <div className={styles.review}>
          <div className={styles.header}>
            <span className={styles.header__user}>{user}</span>{' '}
            <Rate rate={rating} />
          </div>
          <div className={styles.text}>{text}</div>
        </div>
      ))}
    </div>
  );
}
