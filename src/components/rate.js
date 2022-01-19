import { ReactComponent as Star } from '../icons/star.svg';
import styles from './rate.module.css';

export default function Rate({ rate }) {
  return (
    <div className={styles.rate}>
      {[...Array(rate)].map((x, id) => (
        <Star className={styles.rate__item} key={id} />
      ))}
    </div>
  );
}
