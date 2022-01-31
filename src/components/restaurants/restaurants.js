import { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import {restaurantsSelector} from '../../redux/selectors';

function Restaurants({ restaurants }) {
  const [activeId, setActiveId] = useState(restaurants[Object.keys(restaurants)[0]].id);

  const tabs = useMemo(
    () => Object.entries(restaurants).map((restaurant) => ({ id: restaurant[0], label: restaurant[1].name })),
    [restaurants]
  );

  const activeRestaurant = useMemo(
    () => restaurants[activeId],
    [activeId, restaurants]
  );

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} activeId={activeId} />
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
}

Restaurants.propTypes = {
  restaurants: PropTypes.shape(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
    }).isRequired
  ).isRequired,
};

const mapStateToProps = (state) => ({
  restaurants: restaurantsSelector(state),
});

export default connect(mapStateToProps)(Restaurants);
