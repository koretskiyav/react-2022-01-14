import Review from "./review";

import styles from './reviews.module.css'

export default function Reviews({ reviews }){

    return( 
       <div className={styles.body}>
           <h4 className={styles.title}>Reviews:</h4> 
           {reviews.map((review) => (
            <Review key={review.id} review={review} />
           ))}
       </div> 
    );
};
