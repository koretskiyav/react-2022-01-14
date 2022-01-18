import {useMemo,} from 'react';

import Rate from './rate';
import Reviews from './reviews';
import Menu from './menu';

import styles from './restaurant.module.css';

export default function ({restaurant: {name, menu, reviews,},}) {
    const avgRate = useMemo(
        () => reviews.length ? reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length : 0,
        [reviews,]
    );

    return (
        <div className={styles.restaurant}>
            <div className={styles.header}>
                <h1 className={styles.heading}>{name}</h1>
                {avgRate ? <Rate value={avgRate}/> : ''}
            </div>

            <Menu menu={menu}/>
            <Reviews reviews={reviews}/>
        </div>
    );
};