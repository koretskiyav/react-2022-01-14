import { ReactComponent as Star } from '../icons/star.svg';

import styles from './rate.module.css';

export default function Rate({ value }) {
  const range = 5;
  const stars = [];
  for (let i = 1; i <= range; i++) {
    const className = value >= i ? styles.iconRed : styles.iconWhite;
    const fillOpacity = value-i > 1 ? 1 : value-i;
    stars.push(<Star key={i} 
      className={ className } 
      style={{fillOpacity: fillOpacity <= 0 ? 1 : fillOpacity}} />);
  }
  return (
    <div title={"Rating: " + value}>
      { [...stars] }
    </div>
  );
}
