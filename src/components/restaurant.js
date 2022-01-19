import Reviews from './reviews';
import Menu from './menu';
import Rate from './rate';

export default function Restaurant({ menu, reviews }) {
  //const total = reviews.reduce((result, review) => result + review.rating, 0);
  //console.log(total);
  const rating = Math.round(reviews.reduce((result, review) => result + review.rating, 0) / Object.entries(reviews).length);
  return (
    <div>
      <h2>Menu</h2>
      <Menu menu = { menu } />
      <h2>Reviews</h2>
      <Reviews reviews = { reviews } />
      <Rate value = { rating } />
    </div>
  );
}
