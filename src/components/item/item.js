import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './item.module.css';
import Button from '../button';
import { decrement, increment, removing } from '../../redux/actions';

function Item({ product, amount, decrement, increment, removing, fetchData }) {
  useEffect(() => {
    fetchData?.(product.id);
  }, []); // eslint-disable-line

  const sum = amount * product.price;

  return (
    <div className={styles.item} data-id="item">
      <div className={styles.content}>
        <div>
          <h4 className={styles.title}>{product.name}</h4>
          <div className={styles.price}>{product.price} $</div>
        </div>
        <div>
          <div className={styles.counter}>
            <div className={styles.count} data-id="product-amount">
              {amount}
            </div>
            <div className={styles.sum} data-id="item-sum">
              {sum}
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
                onClick={removing}
                data-id="product-removing"
                icon="remove"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
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
  removing: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  amount: state.order[props.product.id] || 0,
});

// const mapDispatchToProps = {
//   decrement,
//   increment,
// };

const mapDispatchToProps = (dispatch, props) => ({
  decrement: () => dispatch(decrement(props.product.id)),
  increment: () => dispatch(increment(props.product.id)),
  removing: () => dispatch(removing(props.product.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
