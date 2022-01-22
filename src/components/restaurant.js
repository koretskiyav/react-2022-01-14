import { useMemo } from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant({ activeRestaurant }) {
  const totalRating = useMemo(
    () =>
      Math.round(
        activeRestaurant.reviews
          .map((item) => item.rating)
          .reduce((a, b) => a + b) / activeRestaurant.reviews.length
      ),
    [activeRestaurant]
  );

  return (
    <div>
      <h3>Общий рейтинг: </h3>
      <Rate value={totalRating} />
      <h3>Меню: </h3>
      <Menu menu={activeRestaurant.menu} />
      <h3>Отзывы: </h3>
      <Reviews reviews={activeRestaurant.reviews} />
    </div>
  );
}
