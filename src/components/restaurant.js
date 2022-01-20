import Menu from './menu';
import Rate from './rate';
import Reviews from './reviews';
import styles from './restaurant.module.css';
import {useMemo} from 'react';

const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length

export default function Restaurant({ restaurant }) {

  const averageRating = useMemo(
    () => Math.floor(arrAvg(restaurant.reviews.map(({ rating }) => rating))),
    [restaurant]
  );

  return (
    <div>
      <div className={styles.averageRating}>
        <h4>Рейтинг ресторана</h4>
        <Rate rating={averageRating}></Rate>
      </div>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
}