import { useMemo } from 'react';
import Menu from './menu'
import Reviews from './reviews';

function Restaurant({ activeRestaurant }) {
  const averageRating = useMemo(() => {
    let totalRatingPoints = 0;

    for (let i = 0; i < activeRestaurant.reviews.length; i++) {
      totalRatingPoints += activeRestaurant.reviews[i].rating;
    }

    return Math.round(totalRatingPoints / activeRestaurant.reviews.length);
  });

  return (
    <div>
      <Menu menu={activeRestaurant.menu} />
      <Reviews reviews={activeRestaurant.reviews} averageRating={averageRating} />
    </div>
  )
}

export default Restaurant;