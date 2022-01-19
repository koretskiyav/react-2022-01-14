import { ReactComponent as Star } from '../icons/star.svg';

import styles from './rate.module.css';

const MAX_RATE = 5;

export default function Rate({ rate = 1 }) {
  const roundedRate = Math.round(rate);
  const boundedRate = Math.min(Math.max(roundedRate, 1), MAX_RATE);

  const pointElements = [];
  for (let i = 1; i <= MAX_RATE; i++) {
    let itemClass = i <= boundedRate ? styles.scored : styles.unscored;
    pointElements.push(
      <span>
        <Star className={itemClass} />
      </span>
    );
  }

  return <div>{pointElements}</div>;
}
