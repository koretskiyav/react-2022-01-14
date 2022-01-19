import {ReactComponent as Star} from '../icons/star.svg';
import {ReactComponent as StarActive} from '../icons/starActive.svg';
import styles from './Rate.module.css'
import {v4 as uuidv4} from "uuid";

export default function Rate({value}) {
    const showStars = () => {
        const arr = []
        for (let i = 0; i < 5; i++){
            if(i < value) arr.push(<StarActive key={uuidv4()} className={styles.star}/>)
            else arr.push(<Star key={uuidv4()} className={styles.star}/>)
        }
        return arr
    }
    return (
        <div>
            <p className={styles.rateText}>rate: {value}</p>
            <p className={styles.rate}>{showStars()}</p>
        </div>
    );
}