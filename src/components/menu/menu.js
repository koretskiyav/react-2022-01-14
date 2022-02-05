import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Product from '../product';
import Basket from '../basket';
import Loader from '../loader';

import styles from './menu.module.css';
import {
  isMenuLoadedSelector,
  isMenuLoadingSelector,
  loadedProductsSelector,
} from '../../redux/selectors';
import { loadProducts } from '../../redux/actions';

class Menu extends Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    id: PropTypes.string.isRequired,
  };

  state = { error: null };

  componentDidCatch(error) {
    this.setState({ error });
  }

  componentDidMount() {
    const { loadProducts, id, loading, loaded } = this.props;

    if (!loading && !loaded) {
      loadProducts(id);
    }
  }

  render() {
    const { menu, loading, loaded } = this.props;

    if (loading) {
      return <Loader />;
    }

    if (!loaded) {
      return 'No products';
    }

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

const mapStateToProps = (state, props) => ({
  menu: loadedProductsSelector(state, props),
  loading: isMenuLoadingSelector(state, props),
  loaded: isMenuLoadedSelector(state, props),
});

const mapDispatchToProps = (dispatch, props) => ({
  loadProducts: () => dispatch(loadProducts(props.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
