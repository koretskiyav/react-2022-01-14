import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant({ restaurant }) {
  const ratingSum = restaurant.reviews.reduce(
    (sum, { rating }) => (sum += rating),
    0
  );
  const averageRating = Math.ceil(ratingSum / restaurant.reviews.length);
  return (
    <div>
      <p>Menu</p>
      <Menu menu={restaurant.menu} />
      <p>Reviews</p>
      <Reviews reviews={restaurant.reviews} />
      <p>Average rating</p>
      <Rate value={averageRating} />
    </div>
  );
}
