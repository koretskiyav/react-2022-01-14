import { Component } from 'react';
import PropTypes from 'prop-types';

import Loader from '../loader';
import Product from '../product';
import Basket from '../basket';

import styles from './menu.module.css';

class Menu extends Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired),
    loading: PropTypes.bool.isRequired
  };

  state = { error: null };

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { menu, loading } = this.props;

    if (loading) return <Loader/>
    if (this.state.error) (<p>Меню этого ресторана сейчас недоступно</p>);

    return (
      <div className={styles.menu}>
        <div>
          {
            menu.map((id) => <Product key={id} id={id} /> )
          }
        </div>
        <div>
          <Basket />
        </div>
      </div>
    );
  }
};

export default Menu;