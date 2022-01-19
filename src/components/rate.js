import styles from "./rate.module.css";
import { ReactComponent as Star } from '../icons/star-fill.svg';

export default function Rate({ value }) {

    const rate = (Math.round(value) >= 0 && Math.round(value) <= 5) ? Math.round(value) : 0;

    let stars = [];

    for(let i = 0; i < 5; i++) {
        stars.push({
            id: i,
            fill: i < rate
        });
    }

    return (
        <div className={styles.stars}>
            {stars.map((star) => (
                <Star key={star.id} className={styles.star + ((star.fill) ? (' ' +styles.fill) : '')}/>
            ))}
        </div>
    );
}