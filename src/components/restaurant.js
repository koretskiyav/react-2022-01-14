import Menu from './menu';
import Rate from './rate';
import Reviews from './reviews';

export default function Restaurant({ restaurant }) {
  const averageRating = Math.floor(restaurant.reviews.reduce(
                        (sum, review) => sum + review.rating, 0
                        ) / restaurant.reviews.length);

  return (
    <div>
      <Rate rating={averageRating} />
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
}
