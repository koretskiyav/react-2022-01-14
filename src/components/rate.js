import styles from './rate.module.css';
import { ReactComponent as Star } from '../icons/star.svg';

function Rate({ value }) {
  const MAX_RATING = 5;
  const rates = [];

  for (let i = 0; i < MAX_RATING; i++) {
    if (i < value) {
      rates.push(<Star key={i} className={styles.icon} />)
    }
  }

  return rates;
}

export default Rate;
