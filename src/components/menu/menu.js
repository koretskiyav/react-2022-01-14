import { Component } from 'react';
import PropTypes from 'prop-types';

import Basket from '../basket';

import styles from './menu.module.css';
import { connect } from 'react-redux';
import { loadProducts } from '../../redux/actions';
import Products from '../product/products';

class Menu extends Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };

  state = { error: null };

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { restId } = this.props;

    if (this.state.error) {
      return <p>Меню этого ресторана сейчас недоступно :(</p>;
    }

    return (
      <div className={styles.menu}>
        <div>
          <Products restId={restId} />
        </div>
        <div>
          <Basket />
        </div>
      </div>
    );
  }
}

export default Menu;
