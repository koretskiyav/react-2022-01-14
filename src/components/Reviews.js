import Rate from "./Rate";
import {ReactComponent as StarActive} from "../icons/starActive.svg";
import styles from "./Reviews.module.css";
import {ReactComponent as Star} from "../icons/star.svg";
import { v4 as uuidv4 } from 'uuid';

export default function Reviews({activeRestaurant}) {
    const reviews = activeRestaurant.reviews
    const sumRation = reviews.reduce((accum, {rating}) => {
        return accum + rating
    }, 0)
    const avgRation = Math.round(sumRation / reviews.length)
    const showStars = () => {
        let arr = []
        for (let i = 0; i < 5; i++){
            if(i < avgRation){
                arr.push(<StarActive key={uuidv4()} className={styles.star}/>)
            } else{
                arr.push(<Star key={uuidv4()} className={styles.star}/>)
            }
        }
        return arr
    }
    const showAllComments = reviews.map(({user, text, rating, id}) => {
        return (
            <div key={id} className={styles.comment}>
                <h3 className={styles.name}>{user}</h3>
                <span className={styles.text}>{text}</span>
                <Rate value={rating}/>
            </div>
        )
    })

    return (
        <div>
            <div>
                <span className={styles.avg_title}>AVG Ration:</span>
                <span>{showStars()}</span>
            </div>
            <h2>Comments:</h2>
            <div>{showAllComments}</div>
        </div>
    );
}