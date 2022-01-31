import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import { getTabsSelector } from '../../redux/selectors';

function Restaurants({ restaurants, tabs, ratings }) {
  const [activeId, setActiveId] = useState(Object.keys(restaurants)[0]);

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} activeId={activeId} />
      <Restaurant restaurant={restaurants[activeId]} ratings={ratings} />
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

export default connect((state) => {
  return {
    restaurants: state.restaurants,
    tabs: getTabsSelector(state),
    ratings: state.reviews,
  };
})(Restaurants);
