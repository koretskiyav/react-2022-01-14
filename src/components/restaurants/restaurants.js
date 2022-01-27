import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Basket from '../basket';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

function Restaurants({ restaurants }) {
  const [activeId, setActiveId] = useState(restaurants[0].id);

  const allProducts = useMemo(
    () =>
      restaurants.reduce((products, rest) => [...products, ...rest.menu], []),
    [restaurants]
  );

  const tabs = useMemo(
    () => [
      ...restaurants.map(({ id, name }) => ({ id, label: name })),
      { id: 'basket', label: 'Basket' },
    ],
    [restaurants]
  );

  const activeRestaurant = useMemo(
    () => restaurants.find((restaurant) => restaurant.id === activeId),
    [activeId, restaurants]
  );

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} activeId={activeId} />
      {activeId !== 'basket' ? (
        <Restaurant restaurant={activeRestaurant} />
      ) : (
        <Basket allProducts={allProducts} />
      )}
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
