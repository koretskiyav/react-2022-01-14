import styles from './product.module.css';
import { ReactComponent as Star } from '../icons/star.svg';

export default function Rate({ value }) {
  // let content = ''
  // content  = function(){ 
  //     let result = ''
  //     for (let i = 0; i < value; i++){
  //       result += <Star className={styles.star} />
  //   } 
  //   return result
  // } 
  return (
    <div>
      {value}<Star className={styles.star} />
    </div>
  );
}