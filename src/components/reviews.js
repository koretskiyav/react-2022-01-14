import Rate from './rate';

export default function Reviews( {reviews} ) {
  const items = reviews.map((item) => (
    <div>
      <div><b>Имя: </b>{item.user}</div>
      <div><b>Отзыв: </b>{item.text}</div>
      <div>{<Rate value={item.rating} />}</div>
      <hr />
    </div>
    )
  );
  return (<div>{items}</div>);
}