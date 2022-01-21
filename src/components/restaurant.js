import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';
import styles from './restaurant.module.css';

export default function Restaurant({ restaurant }) {
  const reviewRatingAmount = restaurant.reviews.map((review) => (review.rating));
  return (
    <div className={styles.restaurant}>
      <div class="className='restaurant__item'">
        <Menu menu={restaurant.menu} />
      </div>
      <div className='restaurant__item'>
        <h3 className={styles.restaurant__reviewTitle}>Reviews</h3>
        <Reviews reviews={restaurant.reviews} />
      </div>
      <div className={`${styles.restaurant__item} ${styles.restaurant__review}`}>
        <h3 className={styles.restaurant__reviewTitle}>Average score</h3>
        <Rate value={reviewRatingAmount.reduce((a, b) => (a + b)) / reviewRatingAmount.length}/>
      </div>
    </div>
  )
}
