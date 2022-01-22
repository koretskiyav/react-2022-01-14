import { PureComponent } from 'react';
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
