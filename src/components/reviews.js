import Rate from "./rate"
export default function Reviews({reviews}){
  return(

    <div>
      {reviews.map((review)=>(
        <div key={review.id}>
          <Rate key={review.id} value={review.rating} />
          <p>{review.user}</p>
          <p>{review.text}</p>
        </div>
      ))}

    </div>
  )
}