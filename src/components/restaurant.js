import Menu from './menu'
import Reviews from './reviews'
import Rate from './rate'

import styles from './restaurant.module.css'

export default function Restaurant({ name,menu,reviews }){
    let rating = 0;

    // Find average of rating
    reviews.forEach(review => rating += review.rating )
    rating = Math.round(rating / reviews.length);

    return( 
       <div>
           <div className={styles.header}>
                <h2>{name}</h2> 
                <Rate value={rating}/>
           </div>
           <Menu menu={menu} />
           <Reviews reviews={reviews} />
       </div> 
    );
};

