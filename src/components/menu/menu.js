import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Product from '../product';
import Basket from '../basket';

import styles from './menu.module.css';

import { menuForRestaurantSelector } from '../../redux/selectors';

class Menu extends Component {
  static propTypes = {
    menu: PropTypes.array.isRequired,
  };

  state = { error: null };

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { restaurantId, menu } = this.props;

    if (this.state.error) {
      return <p>Меню этого ресторана сейчас недоступно :(</p>;
    }

    return (
      <div className={styles.menu}>
        <div>
          {menu.map((id) => (
            <Product key={id} id={id} />
          ))}
        </div>
        <div>
          <Basket />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  menu: menuForRestaurantSelector(state, ownProps.restaurantId),
});

export default connect(mapStateToProps)(Menu);
