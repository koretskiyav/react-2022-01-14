import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import Loader from '../loader';
import {
  restaurantsListSelector,
  restaurantsLoadedSelector,
  restaurantsLoadingSelector,
  restaurantsActiveIdSelector
} from '../../redux/selectors';
import { loadRestaurants, setActiveId } from '../../redux/actions';

function Restaurants({ restaurants, activeId, loading, loaded, loadRestaurants, setActiveId }) {

  useEffect(
    () => !loaded && !loading && loadRestaurants()
    , [loading, loaded, loadRestaurants]
  );

  if (loading) return <Loader />;
  if (!loaded) return 'No data :(';

  return (
    <div>
      <Tabs tabs={restaurants} onChange={setActiveId} activeId={activeId} />
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
  activeId: restaurantsActiveIdSelector(state),
  loading: restaurantsLoadingSelector(state),
  loaded: restaurantsLoadedSelector(state),
});

const mapDispatchToProps = {
  loadRestaurants,
  setActiveId
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
