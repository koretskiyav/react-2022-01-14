

import styles from './rate.module.css'

import { ReactComponent as Star } from "../icons/star.svg";

export default function Rate({ value }){
    const rate = [];
    for(let i = 0; i < 5; i ++){
        if(i < value){
            rate.push(<Star key={i} className={`${styles.star} ${styles.active}`} />);
            continue;
        } 
        rate.push(<Star key={i} className={styles.star}/>)
    }

    return( 
       <div> 
           {rate}
       </div> 
    );
};
