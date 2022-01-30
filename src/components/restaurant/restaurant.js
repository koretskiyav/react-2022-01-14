import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';

const Restaurant = ({ restaurant, ratings }) => {
  const { id, name, menu, reviews } = restaurant;

  const [activeTab, setActiveTab] = useState('menu');

  const averageRating = useMemo(() => {
    const total = reviews
      .map((reviewId) => {
        return reviewId;
      })
      .reduce((acc, reviewId) => acc + ratings[reviewId].rating, 0);
    return Math.round(total / reviews.length);
  }, [reviews]);

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
    menu: PropTypes.array,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        rating: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};

export default Restaurant;
