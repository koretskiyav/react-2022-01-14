import { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';

class App extends PureComponent {
  render() {
    const { restaurants, order } = this.props;

    const list = restaurants.map(restaurant => restaurant.menu.filter(product => Object.keys(order).includes(product.id)))
    .flat(Infinity);

    return (
      <div>
        <Header />
        <Basket list={list} />
        <Restaurants restaurants={restaurants} />
      </div>
    );
  }
}

App.propTypes = {
  list: PropTypes.object,
  restaurants: PropTypes.array,
};

const mapStateToProps = (state) => ({
  order: state.order,
});

export default connect(mapStateToProps)(App);
