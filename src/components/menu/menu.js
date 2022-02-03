import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadProducts } from '../../redux/actions';
import {
  productsLoadedSelector,
  productsLoadingSelector,
} from '../../redux/selectors';

import Loader from '../loader';
import Product from '../product';
import Basket from '../basket';

import styles from './menu.module.css';

class Menu extends Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };

  state = { error: null };

  componentDidCatch(error) {
    this.setState({ error });
  }

  componentDidMount() {
    this.props.loadProducts(this.props.restId);
  }

  componentWillUnmount() {
    if (!this.props.loading && !this.props.loading)
      this.props.loadProducts(this.props.restId);
  }

  render() {
    const { menu } = this.props;

    if (this.props.loading) return <Loader />;
    if (this.props.loading) return 'No data :(';

    //if (this.state.error) {
    //  return <p>Меню этого ресторана сейчас недоступно :(</p>;
    //}

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
