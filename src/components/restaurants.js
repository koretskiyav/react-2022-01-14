import { useState, useMemo } from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Tabs from './tabs';

export default function Restaurants({ restaurants }) {
  const [activeId, setActiveId] = useState(restaurants[0].id);

  const tabs = useMemo(
    () => restaurants.map(({ id, name }) => ({ id, label: name })),
    [restaurants]
  );

  const activeRestaurant = useMemo(
    () => restaurants.find((restaurant) => restaurant.id === activeId),
    [activeId, restaurants]
  );

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} />
      <Reviews reviews={activeRestaurant.reviews} />
      <Menu menu={activeRestaurant.menu} />
    </div>
  );
}
