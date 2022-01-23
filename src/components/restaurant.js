import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';
import styles from './restaurant.module.css';
import { useMemo } from 'react';

export default function Restaurant({ menu, label, reviews }) {
  const averageRate = useMemo(() => {
    const result = reviews.reduce((acc, { rating }) => acc + rating, 0);
    return Math.round(result / reviews.length);
  }, [reviews]);

  return (
    <div>
      <p className={styles.label}>{label}</p>
      <Rate value={averageRate} />
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
}
