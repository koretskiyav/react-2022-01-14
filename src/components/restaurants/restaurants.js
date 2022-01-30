import { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

function Restaurants({ restaurants }) {
  const [activeId, setActiveId] = useState(Object.keys(restaurants)[0]);

  const tabs = useMemo(
    () =>
      Object.entries(restaurants).map(([id, { name }]) => ({
        id,
        label: name,
      })),
    [restaurants]
  );

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} activeId={activeId} />
      <Restaurant id={activeId} />
    </div>
  );
}

Restaurants.propTypes = {
  restaurants: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
});

export default connect(mapStateToProps)(Restaurants);
