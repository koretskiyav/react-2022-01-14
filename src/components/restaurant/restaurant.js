import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';

import { averageRatingSelector } from '../../redux/selectors';

const Restaurant = ({ restaurant, averageRating }) => {
  const { id, name } = restaurant;

  const [activeTab, setActiveTab] = useState('menu');

  const tabs = [
    { id: 'menu', label: 'Menu' },
    { id: 'reviews', label: 'Reviews' },
  ];

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <Tabs tabs={tabs} activeId={activeTab} onChange={setActiveTab} />
      {activeTab === 'menu' && <Menu restaurantId={restaurant.id} key={id} />}
      {activeTab === 'reviews' && <Reviews restaurantId={restaurant.id} />}
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string.isRequired, 
    name: PropTypes.string, 
    menu: PropTypes.array
}).isRequired,
  averageRating: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  averageRating: averageRatingSelector(state, ownProps.restaurant.id),
});

export default connect(mapStateToProps)(Restaurant);
