import StarIcon from 'mdi-react/StarIcon';
import StarOutlineIcon from 'mdi-react/StarOutlineIcon';

export default function Rate({ value }) {
  const rate = Array.from({ length: value }, index => index);
  const rest = Array.from({ length: 5 - value }, index => index);

  const rateStars = rate.map(star =>
    <StarIcon key={star} />
  );
  const restStars = rest.map(star =>
    <StarOutlineIcon key={star} />
  )
  return (
    <div>
      {rateStars}
      {restStars}
    </div>
  );
}