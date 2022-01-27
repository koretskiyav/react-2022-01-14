import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';
import { connect } from 'react-redux';
import Basket from '../basket';

class App extends PureComponent {
  render() {
    const { restaurants, openBasket } = this.props;

    return (
      <div>
        <Header />
        {openBasket ? <Basket /> : <Restaurants restaurants={restaurants} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  openBasket: state.app.openBasket
});

export default connect(mapStateToProps)(App);

App.propTypes = {
  restaurants: PropTypes.array,
};
