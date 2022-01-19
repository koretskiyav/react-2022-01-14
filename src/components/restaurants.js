import { useState, useMemo } from 'react';
import Menu from './menu';
import Tabs from './tabs';
import Restaurant from './Restaurant';

export default function Restaurants({ restaurants }) {
  const [activeId, setActiveId] = useState(restaurants[0].id);

  const tabs = useMemo(
    () => restaurants.map(({ id, name }) => ({ id, label: name })),
    [restaurants]
  );

  const {name, menu, reviews} = useMemo(
    () => restaurants.find((restaurant) => restaurant.id === activeId),
    [activeId, restaurants]
  );

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} />
      <Restaurant name={name} reviews={reviews}/>
      <Menu menu={menu} />
    </div>
  );
}
