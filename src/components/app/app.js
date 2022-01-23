import { PureComponent } from 'react';
import Restaurants from '../restaurants';
import Header from '../header';
import PropTypes from 'prop-types';

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
  restaurants: PropTypes.array,
};
