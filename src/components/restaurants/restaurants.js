import { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

function Restaurants({ restaurants }) {
  const restaurantsIdList = useMemo(
    () => Object.keys(restaurants),
    [restaurants]
  );
  const [activeId, setActiveId] = useState(restaurantsIdList[0]);
  const tabs = useMemo(
    () =>
      restaurantsIdList.reduce((acc, next) => {
        acc.push({
          id: restaurants[next].id,
          label: restaurants[next].name,
        });
        return acc;
      }, []),
    [restaurants, restaurantsIdList]
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
  restaurants: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
    })
  ),
};

const mapStateToProps = (state) => {
  return { restaurants: state.restaurants };
};

export default connect(mapStateToProps)(Restaurants);
