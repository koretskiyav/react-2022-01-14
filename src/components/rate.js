import { ReactComponent as Star } from '../icons/star.svg';

import styles from './rate.module.css';

export default function Rate({ value }) {
  const range = 5;
  const stars = [];
  for (let i = 1; i <= range; i++) {
    const className = value >= i ? styles.iconRed : styles.iconWhite;
    stars.push(<Star key={i} className={ className } />);
  }
  return (
    <div>
      Rating: { [...stars] }
    </div>
  );
}
