import { useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import Loader from '../loader';
import { restaurantsListSelector } from '../../redux/selectors';
import { loadRestaurants } from '../../redux/actions';

function Restaurants({ restaurants, loadRestaurants }) {
  const [activeId, setActiveId] = useState(restaurants[0]?.id);

  useEffect(() => {
    loadRestaurants();
  }, []); // eslint-disable-line

  useEffect(() => {
    if (restaurants.length > 0 && !activeId) {
      setActiveId(restaurants[0]?.id);
    }
  }, [restaurants]); // eslint-disable-line

  const tabs = useMemo(
    () => restaurants.map(({ id, name }) => ({ id, label: name })),
    [restaurants]
  );

  if (!activeId) return <Loader />;

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} activeId={activeId} />
      <Restaurant id={activeId} />
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
  restaurants: restaurantsListSelector(state),
});

const mapDispatchToProps = {
  loadRestaurants,
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
