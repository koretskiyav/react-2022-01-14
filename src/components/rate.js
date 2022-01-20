import styles from './product.module.css';
import { ReactComponent as Star } from '../icons/star.svg';

export default function Rate( {value} ) {
  const stars = Array(value).fill(<Star className={styles.icon}/>);
  return (<div>{stars}</div>);
}