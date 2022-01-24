import { PureComponent } from 'react';
import Restaurants from '../../components/restaurants';

export default class App extends PureComponent {
  render() {
    const { restaurants } = this.props;
    return (
      <div>
        <Restaurants restaurants={restaurants} />
      </div>
    );
  }
}
