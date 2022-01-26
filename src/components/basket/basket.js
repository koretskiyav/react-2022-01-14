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
  };

  state = { error: null };

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { list } = this.props;

    if (this.state.error) {
      return <p>Меню этого ресторана сейчас недоступно :(</p>;
    }
    
    return (
      <div className={styles.list}>
        <div>
          {list.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

export default Basket;
