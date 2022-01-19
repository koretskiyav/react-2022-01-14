import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant({ menu, label, reviews }) {
  const averageRate = (arr) => {
    let result = 0;

    arr.forEach((el) => {
      result += el.rating;
    });
    console.log(result / arr.length);
    return result / arr.length;
  };

  return (
    <div>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{label}</p>
      <Rate value={averageRate(reviews)} />
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
}
