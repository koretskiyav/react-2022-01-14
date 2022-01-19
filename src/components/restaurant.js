import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

import styles from './restaurant.module.css';

export default function Restaurant({ restaurant }) {
  const averageRating = getAverage(
    restaurant.reviews.map(({ rating }) => rating)
  );

  return (
    <div>
      <div className={styles.title}>
        {restaurant.name} <Rate rate={averageRating} />
      </div>
      <div className={styles.menu}>
        <span className={styles.subtitle}>Menu</span>
        <Menu menu={restaurant.menu} />
      </div>
      <div className={styles.reviews}>
        <span className={styles.subtitle}>Reviews</span>
        <Reviews reviews={restaurant.reviews} />
      </div>
    </div>
  );
}

function getAverage(array) {
  return array.reduce((avg, n, index) => (avg * index + n) / (index + 1), 0);
}
