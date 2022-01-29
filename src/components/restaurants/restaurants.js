import { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import {restaurantsSelector} from '../../redux/selectors';

function Restaurants({ restaurants }) {
  const [activeId, setActiveId] = useState(restaurants[Object.keys(restaurants)[0]].id);

  const tabs = useMemo(
    () => Object.keys(restaurants).map((id) => ({ id, label: restaurants[Object.keys(restaurants)[0]].name })),
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
  restaurants: PropTypes.shape().isRequired,
};

const mapStateToProps = (state) => ({
  restaurants: restaurantsSelector(state),
});

export default connect(mapStateToProps)(Restaurants);
