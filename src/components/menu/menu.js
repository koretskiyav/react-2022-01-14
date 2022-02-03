import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Product from '../product';
import Basket from '../basket';

import styles from './menu.module.css';

import Loader from '../loader';

import {
  productsLoadingSelector,
  productsLoadedSelector,
 } from '../../redux/selectors';
 import { loadProducts } from '../../redux/actions';

class Menu extends Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };

  state = { error: null };

  componentDidMount() {
    if (!this.props.loading && !this.props.loaded[this.props.restId]) {
      this.props.loadProducts(this.props.restId);
    }
  }

  componentDidUpdate() {
    if (!this.props.loading && !this.props.loaded[this.props.restId]) {
        this.props.loadProducts(this.props.restId);  
    } 
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { menu, loading, loaded } = this.props;

    if (loading) return <Loader />;
    if (!loaded) return <p>Меню этого ресторана сейчас недоступно :(</p>;

    // if (this.state.error) {
    //   return <p>Меню этого ресторана сейчас недоступно :(</p>;
    // }

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

const mapStateToProps = (state) => ({
  loading: productsLoadingSelector(state),
  loaded: productsLoadedSelector(state),
});

const mapDispatchToProps = {
  loadProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
