import styles from './review.module.css';
import Rate from "./rate";

export default function Review({ review }) {

    return (
        <div className={styles.card}>
            <h3>{review.user}</h3>
            <Rate value={review.rating}/>
            <p>"{review.text}"</p>
        </div>
    );
}