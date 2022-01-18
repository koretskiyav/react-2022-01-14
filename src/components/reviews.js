import Rate from './rate';

import styles from './reviewes.module.css'

export default function ({reviews}) {
    return (
        <section>
            <h2 className={styles.heading}>Reviews</h2>
            <div className={styles.list}>
                {reviews.map(({id, user, text, rating,}) => (
                    <div className={styles.review} key={id}>
                        <p className={styles.reviewAuthor}>{user}</p>
                        <div className={styles.reviewRate}>
                            <Rate value={rating}/>
                            <p className={styles.reviewRateValue}>({rating})</p>
                        </div>
                        <p className={styles.reviewText}>{text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}