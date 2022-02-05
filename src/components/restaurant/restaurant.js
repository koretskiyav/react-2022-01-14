import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Links from '../links';
import {
  averageRatingSelector,
  restaurantSelector,
} from '../../redux/selectors';

const Restaurant = ({ restaurant, averageRating }) => {
  const { id, name, menu, reviews } = restaurant;

  const links = [
    { linkId: 'menu', label: 'Menu', to: `/restaurants/${id}/menu` },
    { linkId: 'reviews', label: 'Reviews', to: `/restaurants/${id}/reviews` },
  ];

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <Links links={links}></Links>
      <Switch>
        <Route path="/restaurants/:restId/menu">
          {({ match }) => (
            <Menu menu={menu} key={id} restId={match.params.restId} />
          )}
        </Route>
        <Route path="/restaurants/:restId/reviews">
          {({ match }) => (
            <Reviews reviews={reviews} restId={match.params.restId} />
          )}
        </Route>
        <Redirect to={`/restaurants/:restId/menu`} />
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
