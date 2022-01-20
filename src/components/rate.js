import styles from './rate.module.css';

import { ReactComponent as Star } from '../icons/star.svg';
import {useMemo} from 'react';

const MAX_RATE = 5;

export default function Rate({ rating }) {

  const stars = useMemo(
    () => [...Array(MAX_RATE).keys()].map(pos => <Star key={pos} className={(rating >= pos+1) ? styles.activeStar : '' } />),
    [rating]
  );

  return (
    <div className={styles.rate}>
      {stars}
    </div>
  );
}