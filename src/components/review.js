import Rate from "./rate";

import styles from './review.module.css'

export default function Review({ review }){
	const {user, text, rating} = review;
	return( 
	   <div className={styles.body}>
		   	<p>{user}</p>
			<p>{text}</p>
			<Rate value={rating}/>
	   </div> 
	);
};

