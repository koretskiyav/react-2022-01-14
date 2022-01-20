import { ReactComponent as Star } from '../icons/star.svg';
import styles from './rate.module.css';

export default function Rate({ rateNumber }) {
let stars = [];
for (let i = 0; i < rateNumber; i++) {
  stars.push(<Star width="20" height="20" className ={styles.icon}/>);
}
  return (<div>{stars}</div>);
}

