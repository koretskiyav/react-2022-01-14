import cn from'classnames';
import styles from './loader.module.css';

function Loader({className}) {
  return (
    <div className={cn(styles.loader, className)}>
      <div className={styles.bounce1} />
      <div className={styles.bounce2} />
    </div>
  );
}

export default Loader;
