import {useMemo, useState} from 'react';
import PropTypes from 'prop-types';

import Restaurant from '../restaurant';
import Tabs from '../tabs';

const Restaurants = ({restaurants}) => {
    const [activeId, setActiveId] = useState(restaurants[0]?.id);

    const tabs = useMemo(
        () => restaurants.map(({id, name}) => ({id, label: name})),
        [restaurants,]
    );

    const activeRestaurant = useMemo(
        () => restaurants.find(({id}) => id === activeId),
        [activeId, restaurants,]
    );

    if (!restaurants.length) {
        return <h2>Restaurants list is not available at this moment</h2>;
    }

    return (
        <div>
            <Tabs tabs={tabs} onChange={setActiveId} activeId={activeId}/>
            <Restaurant restaurant={activeRestaurant}/>
        </div>
    );
};

Restaurants.propTypes = {
    // (???) How to check if an array has at least one element
    // (???) How to check if prop value is unique in array
    restaurants: PropTypes.arrayOf(PropTypes.shape({
        id:   PropTypes.string.isRequired,
        name: PropTypes.string,
    })).isRequired,
};

export default Restaurants;