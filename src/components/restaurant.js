import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant({ restaurant }) {
 const avgRating = Math.round(restaurant.reviews.reduce((sum, current) => {return sum + current.rating}, 0)/restaurant.reviews.length);
 
  return (<div>
    <Rate  rateNumber = {avgRating}/>
    <Menu menu={restaurant.menu}/>
    <Reviews reviews={restaurant.reviews}/>
    </div>
    )
}