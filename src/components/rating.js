import styles from './rating.module.css';

const Rating = ({rating}) => (
  <div className={styles.rating}>
    <div className={styles.stars} style={{'--i': rating + '%'}}></div>
  </div>
);

export default Rating;