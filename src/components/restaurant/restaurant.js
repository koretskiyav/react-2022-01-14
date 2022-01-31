import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import {connect} from 'react-redux';

const Restaurant = ({ restaurant, ratingReviews }) => {
  const { id, name, menu, reviews } = restaurant;

  const [activeTab, setActiveTab] = useState('menu');

  const averageRating = useMemo(() => {
    const total = ratingReviews.reduce((acc, rating) => acc + rating, 0);
    return Math.round(total / reviews.length);
  }, [reviews, ratingReviews]);

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
      {activeTab === 'menu' && <Menu menu={menu} key={id} />}
      {activeTab === 'reviews' && <Reviews reviews={reviews} />}
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    menu: PropTypes.arrayOf(PropTypes.string),
    reviews: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};


const mapStateToProps = (state, props) => ({
  ratingReviews: props.restaurant.reviews.map(id=> state.reviews[id].rating) 
});

export default connect(mapStateToProps)(Restaurant);
