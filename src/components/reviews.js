import Rate from './rate';
import styles from './product.module.css';
export default function Reviews({ reviews }) {

 
  return (
    reviews.map((review)=>(
      <div key={review.id} className={styles.card}>
       <div >{review.user}</div>
       <div >{review.text}</div>
       <Rate  rateNumber = {review.rating}/>
      </div>
      ))
    )
}

