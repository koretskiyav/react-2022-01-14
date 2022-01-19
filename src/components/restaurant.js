import Menu from './menu';
import Rate from './rate';
import Reviews from './reviews';

export default function Restaurant({ restaurant }) {
  const { name, menu, reviews } = restaurant;

  const getAverageRating = () => {
    let sumRating = 0;
    for (let i = 0; i < reviews.length; i++) {
      sumRating += reviews[i].rating;
    }
    return Math.round(sumRating / reviews.length);
  };

  return (
    <>
      <h2>
        {name} <Rate rate={getAverageRating()} />
      </h2>
      <Menu menu={menu} />
      <Reviews reviews={reviews}></Reviews>
    </>
  );
}
