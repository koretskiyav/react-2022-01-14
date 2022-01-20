import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant({ activeRestaurant }) {
  let rating = 0;
  activeRestaurant.reviews.filter((item) => rating += item.rating);  
  rating = Math.round(rating / activeRestaurant.reviews.length);
  return (
    <div>
      <h3>Общий рейтинг: </h3><Rate value={rating} />
      <h3>Меню: </h3><Menu menu={activeRestaurant.menu} />
      <h3>Отзывы: </h3><Reviews reviews={activeRestaurant.reviews} />
    </div>
  )
}