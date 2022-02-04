import { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadProducts } from '../../redux/actions';
import Product from './product';
import {
  productsListSelector,
  productsLoadedSelector,
  productsLoadingSelector,
} from '../../redux/selectors';
import Loader from '../loader';

function Products({ products, restId, loadProducts, loading, loaded }) {
  useEffect(() => {
    if (!loading && !loaded) {
      loadProducts(restId);
    }
  }, [restId, loadProducts, loading, loaded]);

  if (loading) return <Loader />;
  if (!loaded) return 'No data :(';

  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} id={product.id} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: productsListSelector(state),
  loading: productsLoadingSelector(state),
  loaded: productsLoadedSelector(state),
});

const mapDispatchToProps = {
  loadProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
