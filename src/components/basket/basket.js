import { Component } from 'react';
import PropTypes from 'prop-types';

import Item from '../item';

import styles from './basket.module.css';

class Basket extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    total: PropTypes.number
  };

  state = { error: null };

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { list, total } = this.props;

    if (this.state.error) {
      return <p>Корзина сейчас недоступна :(</p>;
    }
    
    return (
      <div className={styles.basket}>
        <h2 className={styles.header}>Your order</h2>
        <div className={styles.list}>
          <div>
            {list.map((product) => (
              <Item key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div>
          <h3 className={styles.total}>Total: {total} $</h3>
        </div>
      </div>
    );
  }
}

export default Basket;
