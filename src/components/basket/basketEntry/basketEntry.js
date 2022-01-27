import styles from './basketEntry.module.css';
import {decrement, increment, remove} from "../../../redux/actions";
import {useMemo, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Button from "../../button";

function BasketEntry({product, amount, decrement, increment, remove, fetchData}) {

  useEffect(() => {
    fetchData?.(product.id);
  }, []);  // eslint-disable-line

  const sum = useMemo(
    () => amount * product.price,
    [amount, product]
  );

  return (
    <div className={styles.basketEntry}>
      <div>
        <h4>{product.name}</h4>
        <div>Price for each: {product.price} $</div>
        <div>Amount: {amount}</div>
        <div>Total price: {sum} $</div>
      </div>
      <div className={styles.basketButtonGroup}>
        <Button
          className={styles.basketButton}
          onClick={decrement}
          icon="minus"
        />
        <Button
          className={styles.basketButton}
          onClick={increment}
          icon="plus"
        />
        <Button
          className={styles.basketButton}
          onClick={remove}
          icon="remove"
        />
      </div>
    </div>
  );
}

BasketEntry.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number
  }).isRequired,
  amount: PropTypes.number,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  fetchData: PropTypes.func
};

const mapStateToProps = (state, props) => ({
  amount: state.order[props.product.id] || 0
});

const mapDispatchToProps = (dispatch, props) => ({
  decrement: () => dispatch(decrement(props.product.id)),
  increment: () => dispatch(increment(props.product.id)),
  remove: () => dispatch(remove(props.product.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketEntry);