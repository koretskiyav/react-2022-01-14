import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';

import styles from './restaurant.module.css';

import {
  averageRatingSelector,
  restaurantSelector,
} from '../../redux/selectors';

const MENU_LINK = 'menu';
const REVIEWS_LINK = 'reviews';

const Restaurant = ({ restaurant, averageRating }) => {
  const { id, name, menu, reviews } = restaurant;

  const tabs = [
    { id: MENU_LINK, label: 'Menu' },
    { id: REVIEWS_LINK, label: 'Reviews' },
  ];

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <div className={styles.tabs}>
        {tabs.map(({ id, label }) => (
          <NavLink
            to={id}
            key={id}
            className={styles.tab}
            activeClassName={styles.active}
          >
            {label}
          </NavLink>
        ))}
      </div>
      <Switch>
        <Route path={`/restaurants/:restId/${MENU_LINK}`}>
          <Menu menu={menu} key={id} restId={id} />
        </Route>
        <Route path={`/restaurants/:restId/${REVIEWS_LINK}`}>
          <Reviews reviews={reviews} restId={id} />
        </Route>
        <Redirect to={`/restaurants/${id}/${MENU_LINK}`} />
      </Switch>
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
  averageRating: PropTypes.number,
};

const mapStateToProps = (state, props) => ({
  restaurant: restaurantSelector(state, props),
  averageRating: averageRatingSelector(state, props),
});

export default connect(mapStateToProps)(Restaurant);
