import Menu from "./menu";
import Tabs from "./tabs";
import {useMemo, useState} from "react";
import Reviews from "./reviews";
import Rate from "./rate";
import styles from './restaurant.module.css';

export default function Restaurant({ restaurant }) {

    const tabs = useMemo(
        () => [
            {id: 'menu', label: 'Menu'},
            {id: 'reviews', label: 'Reviews'}
        ], []);

    const rate = useMemo(
        () => restaurant.reviews.length > 0 ?
                Math.round(Object.values(restaurant.reviews).reduce((a, b) => a + b.rating, 0) / restaurant.reviews.length) :
                0,
        [restaurant]
    )

    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className={styles.restaurant}>
            <h2>{restaurant.name} ({activeTab})</h2><Rate value={rate}/>
            <Tabs tabs={tabs} onChange={setActiveTab} />
            <Menu menu={restaurant.menu} isVisible={activeTab === 'menu'}/>
            <Reviews reviews={restaurant.reviews} isVisible={activeTab === 'reviews'}/>
        </div>
    );
}