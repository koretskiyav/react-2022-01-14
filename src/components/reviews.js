import Rate from './rate';
import styles from "./reviews.module.css";

export default function Reviews({ review }) {
    return (
        <div>
            {review.map((review) => (
                <div className={styles.review}>
                    <p>{review.user}</p>
                    <p><i>{review.text}</i></p>
                    <p><Rate rating={review.rating}/></p>
                </div>
            ))}
        </div>
    );
}