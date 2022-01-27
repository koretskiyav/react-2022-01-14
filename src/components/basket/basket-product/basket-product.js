import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './basket-product.module.css';
import Button from '../../button';
import { decrement, increment, remove } from '../../../redux/actions';

function BasketProduct({ product, order, decrement, increment, remove, fetchData }) {
  useEffect(() => {
    fetchData?.(product.id);
  }, []); // eslint-disable-line

  return (
    <div className={styles.product} data-id="product">
      <div className={styles.content}>
        <div>
          <h4 className={styles.title}>{product.name}</h4>
          <p className={styles.description}>{product.ingredients.join(', ')}</p>
          <div className={styles.price}>{product.price * order.amount} $</div>
        </div>
        <div>
          <div className={styles.counter}>
            <div className={styles.count} data-id="product-amount">
              {order.amount}
            </div>
            <div className={styles.buttons}>
              <Button
                onClick={decrement}
                data-id="product-decrement"
                icon="minus"
              />
              <Button
                onClick={increment}
                data-id="product-increment"
                icon="plus"
              />
              <Button
                onClick={remove}
                data-id="product-delete"
                icon="plus"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

BasketProduct.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  fetchData: PropTypes.func,
  // from HOC counter
  amount: PropTypes.number,
  decrement: PropTypes.func,
  increment: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  order: state.order[props.product.id] || 0,
});

const mapDispatchToProps = (dispatch, props) => ({
  decrement: () => dispatch(decrement(props.product)),
  increment: () => dispatch(increment(props.product)),
  remove: () => dispatch(remove(props.product))
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketProduct);
