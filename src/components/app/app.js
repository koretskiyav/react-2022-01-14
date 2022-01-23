import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';

export default class App extends PureComponent {
  render() {
    const { restaurants } = this.props;

    return (
      <div>
        <Header />
        <Restaurants restaurants={restaurants} />
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ),
};
