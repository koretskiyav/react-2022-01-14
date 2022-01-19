import Reviews from './reviews';
import Menu from './menu';
import Rate from './rate';

export default function Restaurant({ name, menu, reviews }) {
  const total = reviews.reduce((result, review) => result + review.rating, 0);
  const rating = (total / Object.entries(reviews).length).toFixed(1);
  
  return (
    <div>
      <div>
      <h1 style={{ display: 'inline-block' }}>{name}</h1> 
      <span style={{ display: 'inline-block', paddingLeft: '5px' }}>
        <Rate value = { rating } />
      </span>
      </div>      
      <h3>Menu</h3>
      <Menu menu = { menu } />
      <h3>Reviews</h3>
      <Reviews reviews = { reviews } />
    </div>
  );
}
