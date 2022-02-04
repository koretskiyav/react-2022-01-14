import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import {
  productLoadingSelector,
  productLoadedSelector,
  averageRatingSelector,
  restaurantSelector,
} from '../../redux/selectors';
import {loadProducts} from '../../redux/actions';


const tabs = [
  { id: 'menu', label: 'Menu' },
  { id: 'reviews', label: 'Reviews' },
];
// нет необходимости использовать useMemo

const Restaurant = ({
  restaurant:{ id, menu, name, reviews },
  loading, loaded, averageRating, loadProducts
 }) => {

  const [activeTab, setActiveTab] = useState('menu');

  useEffect(
    () => !loaded && !loading && loadProducts(id)
    , [loading, loaded, loadProducts, id]
  );

  return (
    <div>
      <Banner heading={name}>
        {averageRating && <Rate value={averageRating} />}
      </Banner>
      <Tabs tabs={tabs} activeId={activeTab} onChange={setActiveTab} />
      {activeTab === 'menu' && <Menu menu={menu} loading={!loaded} />}
      {activeTab === 'reviews' && <Reviews reviews={reviews} id={id} />}
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.array,
  }).isRequired,
};

const mapStateToProps = (state, props) => ({
  loading: productLoadingSelector(state),
  loaded: productLoadedSelector(state, props),
  restaurant: restaurantSelector(state, props),
  averageRating: averageRatingSelector(state, props),
});

const mapDispatchToProps = {
  loadProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
