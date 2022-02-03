import { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Product from '../product';
import Basket from '../basket';
import Loader from '../loader';

import styles from './menu.module.css';

import {
  productsForRestaurantSelector,
  productsForRestaurantLoadedSelector,
  productsForRestaurantLoadingSelector,
} from '../../redux/selectors';
import { loadProducts } from '../../redux/actions';

function Menu({ id, products, loading, loaded, loadProducts }) {
  useEffect(() => {
    if (products.length === 0 && !loading && !loaded) {
      loadProducts(id);
    }
  }, [id, loading, loaded, loadProducts, products]);

  const menu = useMemo(
    () =>
      products.map((product) => (
        <Product restId={id} key={product.id} id={product.id} />
      )),
    [products, id]
  );

  if (loading) return <Loader />;
  if (!loaded) return 'No data :(';

  return (
    <div className={styles.menu}>
      <div>{menu}</div>
      <div>
        <Basket id={id} />
      </div>
    </div>
  );
}

Menu.propTypes = {
  menu: PropTypes.array,
};

const mapStateToProps = (state, props) => ({
  products: productsForRestaurantSelector(state, props),
  loading: productsForRestaurantLoadingSelector(state, props),
  loaded: productsForRestaurantLoadedSelector(state, props),
});

const mapDispatchToProps = {
  loadProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
