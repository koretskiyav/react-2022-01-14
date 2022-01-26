import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';

export default class App extends PureComponent {
  render() {
    const { restaurants, store } = this.props;
    const order = store.getState().order;
    /*const order = {
      'd75f762a-eadd-49be-8918-ed0daa8dd024': 2,
      '90902233-0095-49ea-9939-1e67ed89ffb9': 3,
    };*/


    //console.log(order);

    //if (order.length) {
      //order.map(item => item.id );
      const list = restaurants.map(restaurant => restaurant.menu.filter(product => Object.keys(order).includes(product.id))).flat(Infinity);
      
      console.log(list);

    //}
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
