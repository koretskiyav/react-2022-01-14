import { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import { restaurants as oldRestaurants } from '../../fixtures';

function Restaurants({ restaurants }) {
  const [activeId, setActiveId] = useState(oldRestaurants[0].id);

  const tabs = useMemo(
    () => oldRestaurants.map(({ id, name }) => ({ id, label: name })),
    [oldRestaurants]
  );

  const activeRestaurant = restaurants[activeId];

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} activeId={activeId} />
      <Restaurant restaurant={activeRestaurant} />
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

const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
});

export default connect(mapStateToProps)(Restaurants);
