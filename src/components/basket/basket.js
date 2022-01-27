import styles from './basket.module.css';
import {Component} from 'react';
import {connect} from 'react-redux';
import BasketEntry from "./basketEntry";

class Basket extends Component {

  render() {
    const {restaurants, order} = this.props;
    const list = restaurants.map(
      restaurant => restaurant.menu.filter(
        product => Object.keys(order).includes(product.id))
    ).flat();
    const total = list.reduce((sum, item) => sum + order[item.id] * item.price, 0);

    return (
      <div className={styles.basket}>
        <div>
          {list.map((product) => (
            <BasketEntry key={product.id} product={product}/>
          ))}
        </div>
        <div>
          <h3>Total: {total} $</h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  order: state.order,
});

export default connect(mapStateToProps)(Basket);