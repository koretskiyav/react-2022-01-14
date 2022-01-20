import Menu from './menu'
import Reviews from './reviews';

function Restaurant({ activeRestaurant }) {
  let totalRatingPoints = 0;

  for (let i = 0; i < activeRestaurant.reviews.length; i++) {
    totalRatingPoints += activeRestaurant.reviews[i].rating;
  }

  const averageRating = Math.round(totalRatingPoints / activeRestaurant.reviews.length);

  return (
    <div>
      <Menu menu={activeRestaurant.menu} />
      <Reviews reviews={activeRestaurant.reviews} averageRating={averageRating} />
    </div>
  )
}

export default Restaurant;