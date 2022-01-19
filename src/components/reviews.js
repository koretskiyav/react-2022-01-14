import Review from './review';

export default function Reviews({ reviews }) {
  const rewiwCards = reviews.map((review) => (
    <Review key={review.id} review={review} />
  ))
  return (
    <div>
      { rewiwCards }
    </div>
  );
}
