import styles from './rate.module.css';
import { ReactComponent as Star } from '../icons/star.svg';

function Rate({ value }) {
  const MAX_RATING = 5;

  return (
    <div>
      {[...Array(MAX_RATING)].map((_, i) => {
        if (i < value) {
          return (
            <Star key={i} className={styles.icon} />
          )
        }
      })}
    </div>
  );
}

export default Rate;
