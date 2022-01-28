import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Navigation from "../navigation";
import Basket from "../basket";
import {BASKET_TABS} from "../navigation/navigation";

function Restaurants({ restaurants }) {
  const [activeId, setActiveId] = useState(restaurants[0].id);

  const tabs = useMemo(
    () => restaurants.map(({ id, name }) => ({ id, label: name })),
    [restaurants]
  );

  const activeRestaurant = useMemo(
    () => restaurants.find((restaurant) => restaurant.id === activeId),
    [activeId, restaurants]
  );

  const mainApp = (activeId === BASKET_TABS) ?
      <Basket restaurants={restaurants}/> :
      <Restaurant restaurant={activeRestaurant} />;

  return (
    <div>
        <Navigation tabs={tabs} onChangeTabs={setActiveId} activeId={activeId}/>
        {mainApp}
    </div>
  );
}

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default Restaurants;
