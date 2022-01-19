import Menu from "./menu";
import Reviews from "./Reviews";

export default function Restaurant({activeRestaurant}) {
    return (
        <div>
            <Menu menu={activeRestaurant.menu}/>
            <Reviews activeRestaurant={activeRestaurant}/>
        </div>
    );
}