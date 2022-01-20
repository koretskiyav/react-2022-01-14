import Rate from './rate';
export default function Review({  review }) {
  return (
    <div  style={{borderBottom: '1px solid grey'}}>
     <div style={{display: 'flex', justifyContent: 'space-between'}}>
       <div style={{fontStyle: 'italic'}}>{review.user}</div>
       <Rate value={review.rating} />
     </div>
      <p>{review.text}</p>
    </div>
  );
}