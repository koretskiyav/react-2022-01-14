import styles from './basket.module.css';

import BasketProduct from './basket-product';

import { connect } from 'react-redux';

function Basket({order}) {
  const totalAmount = order.reduce((total, item) => total + item.product.price * item.amount, 0);

  return (
    <div className={styles.basket}>
      <div>
        {order.map((basketProduct) => (
            <BasketProduct key={basketProduct.product.id} product={basketProduct.product} />
          ))}
        <div className={styles.product}>
          <div className={styles.content}>
            <h4 className={styles.title}>Total order amount</h4>
            <div className={styles.price}>{totalAmount} $</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  order: Object.values(state.order)
});

export default connect(mapStateToProps)(Basket);
