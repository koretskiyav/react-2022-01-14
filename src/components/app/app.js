import { PureComponent } from 'react';
import PropTypes, { shape } from 'prop-types';
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
  restaurants: PropTypes.arrayOf(shape)
};
