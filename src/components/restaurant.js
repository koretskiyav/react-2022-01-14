import Menu from './menu';
import Reviews from './reviews';
import Rate from "./rate";

export default function Restaurant({ restaurant }) {
    return (
        <div>
            <p>
                <Rate rating={evaluateRating(restaurant.reviews)}/>
            </p>
            <Menu menu={restaurant.menu}/>
            <Reviews review={restaurant.reviews}/>
        </div>
    );
}

function evaluateRating(review) {
    if (!review || review.length === 0) return 0;

    let total = 0;
    for (let i = 0; i < review.length; i++) {
        total += review[i].rating;
    }
    return Math.round(total / review.length);
}

