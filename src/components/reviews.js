import Rate from './rate';
import styles from './reviews.module.css';

export default function Reviews({ reviews }) {
  return (
    <div className={styles.reviews}>
      {reviews.map((review) => (
        <div key={review.id} className="reviews__item review">
          <h3 className='review__title'>{review.user}</h3>
          <p className='review__text'>{review.text}</p>
          <Rate className="review__rating" value={review.rating}/>
        </div>
      ))}
    </div>
  )
}
