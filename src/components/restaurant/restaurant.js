import { useMemo } from 'react';
import PropTypes from 'prop-types';

import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import styles from './restaurant.module.css';

const Restaurant = ({ restaurant }) => {
  const { id, name, menu, reviews } = restaurant;

  const averageRating = useMemo(() => {
    const total = reviews.reduce((acc, { rating }) => acc + rating, 0);
    return Math.round(total / reviews.length);
  }, [reviews]);

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <div className={styles.restaurant}>
        <Menu key={id} menu={menu} />
        <Reviews reviews={reviews} />
      </div>
    </div>
  );
};

export default Restaurant;

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    menu: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        ingrediens: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        user: PropTypes.string,
        test: PropTypes.string,
        rating: PropTypes.number,
      })
    ),
  }),
};
