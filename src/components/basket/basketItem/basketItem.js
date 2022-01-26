import { connect } from 'react-redux';
import { decrement, increment, clear } from '../../../redux/actions';
import styles from './basketItem.module.css';
import Button from '../../button';

function BasketItem({ product, amount, price, decrement, increment, clear }) {
  return (
    <>
      {product.name} {amount}unit {price}${' '}
      <div className={styles.buttons}>
        <Button onClick={decrement} data-id="product-decrement" icon="minus" />
        <Button onClick={increment} data-id="product-increment" icon="plus" />
        <Button onClick={clear} data-id="product-delete" icon="delete" />
      </div>
    </>
  );
}

const mapStateProps = (state, props) => ({
  amount: state.order[props.product.id]?.amount,
  price: state.order[props.product.id]?.price,
});
const mapDispatchToProps = (dispatch, props) => ({
  decrement: () => dispatch(decrement(props.product.id, props.product.price)),
  increment: () => dispatch(increment(props.product.id, props.product.price)),
  clear: () => dispatch(clear(props.product.id)),
});
export default connect(mapStateProps, mapDispatchToProps)(BasketItem);
