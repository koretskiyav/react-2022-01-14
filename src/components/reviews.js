import Rate from './rate';
import styles from './reviews.module.css';

export default function Reviews({ reviews }) {
  return (
    <div className={styles.list}>
      {reviews.map(({ user, text, rating, id }) => (
        <article className={styles.review} key={id}>
          <h4>User: {user}</h4>
          <p>Review: {text}</p>
          <Rate rate={rating}></Rate>
        </article>
      ))}
    </div>
  );
}
