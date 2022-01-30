import { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

function Restaurants({ restaurants }) {
  const restaurantsArray = Object.values(restaurants)
  const [activeId, setActiveId] = useState(restaurantsArray[0].id);

  const tabs = useMemo(
    () => restaurantsArray.map(({ id, name }) => ({ id, label: name })),
    [restaurantsArray]
  );

  const activeRestaurant = useMemo(
    () => restaurantsArray.find((restaurant) => restaurant.id === activeId),
    [activeId, restaurantsArray]
  );
  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} activeId={activeId} />
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
}

Restaurants.propTypes = {
  restaurants: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string
    })
  ).isRequired,
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
});

export default connect(mapStateToProps)(Restaurants);
