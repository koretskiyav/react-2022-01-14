import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';
import Cart from '../cart';

export default class App extends PureComponent {
  render() {
    const { restaurants } = this.props;
    const products = restaurants.reduce((allProducts, {menu,}) => ({
      ...allProducts,
      ...menu.reduce((restaurantProducts, product) => ({
        ...restaurantProducts,
        [product.id]: {...product,},
      }), {})
    }), {});

    return (
      <div>
        <Header />
        <Restaurants restaurants={restaurants} />
        <Cart products={products} />
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.shape({
      menu: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.string.isRequired,
      })).isRequired
  }).isRequired),
};
