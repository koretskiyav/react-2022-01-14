import { connect } from 'react-redux';
import Product from '../product';
import styles from './basket.module.css';

const Basket = ({ restaurants, basket }) => {
  const product = [];
  restaurants.map((restaurant) => {
    return restaurant.menu.map((item) => product.push(item));
  });
  const productOrder = product.filter(({ id }) => basket[id]);
  const priceForAll = productOrder.reduce((accum, { price, id }) => {
    return accum + basket[id] * price;
  }, 0);
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Basket</h2>
      <div>
        <div className={styles.title}>
          {priceForAll ? `Price for all: ${priceForAll} $` : `Cart is empty `}
        </div>
        <div>
          {productOrder.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  basket: state.order,
});

export default connect(mapStateToProps)(Basket);
