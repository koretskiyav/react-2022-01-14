import styles from './rate.module.css';

import { ReactComponent as Star } from '../icons/star.svg';

export default function Rate({ rating }) {
  const stars = [
  <Star key={1} className={styles.star} />,
  <Star key={2} className={styles.star} />,
  <Star key={3} className={styles.star} />,
  <Star key={4} className={styles.star} />,
  <Star key={5} className={styles.star} />,
  ];

  return (
    <div>
      {stars.slice(0, rating)}
    </div>
  );
}
