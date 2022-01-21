import styles from './rate.module.css';
import { ReactComponent as Star } from '../icons/star.svg';

export default function Rate({ value }) {
  if (value > 5) {
    value = 5
  }
  if (value < 0) {
    value = 0
  }

  return (
    <div className={styles.rate}>
      {[...Array(5)].map((item, index) => (
        <Star key={index} className={`${styles.rate__icon} ${value -1 < index || styles.rate__iconActive}`}/>
      ))}
    </div>
  )
}
