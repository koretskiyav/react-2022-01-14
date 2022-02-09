import { connect } from 'react-redux';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { increment, decrement, remove } from '../../../redux/actions';
import Button from '../../button';
import styles from './basket-item.module.css';
import {checkoutLoadingSelector} from "../../../redux/selectors";

function BasketItem({
  product,
  amount,
  subtotal,
  restId,
  increment,
  decrement,
  remove,
  loading,
}) {
  return (
    <div className={styles.basketItem}>
      <div className={styles.name}>
        <Link to={`/restaurants/${restId}/menu`}>{product.name}</Link>
      </div>
      <div className={styles.info}>
        <div className={styles.counter}>
          <Button onClick={decrement} icon="minus" disabled={loading} secondary small />
          <span className={styles.count}>{amount}</span>
          <Button onClick={increment} icon="plus" disabled={loading} secondary small />
        </div>
        <p className={cn(styles.count, styles.price)}>{subtotal} $</p>
        <Button onClick={remove} icon="delete" disabled={loading} secondary small />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: checkoutLoadingSelector(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () => dispatch(increment(ownProps.product.id)),
  decrement: () => dispatch(decrement(ownProps.product.id)),
  remove: () => dispatch(remove(ownProps.product.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketItem);
