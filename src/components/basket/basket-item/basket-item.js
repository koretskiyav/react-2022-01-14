import { connect } from 'react-redux';
import cn from 'classnames';
import {NavLink} from 'react-router-dom';
import { increment, decrement, remove } from '../../../redux/actions';
import Button from '../../button';
import styles from './basket-item.module.css';
import {restaurantByProductSelector,} from '../../../redux/selectors';

function BasketItem({
  product,
  restaurant,
  amount,
  subtotal,
  increment,
  decrement,
  remove,
}) {
  return (
    <div className={styles.basketItem}>
      {restaurant?.id
        ? <NavLink
            to={`/restaurants/${restaurant.id}`}
            className={styles.name}
          >
            <span>{product.name}</span>
          </NavLink>
        : <div className={styles.name}>
            <span>{product.name}</span>
          </div>
      }
      <div className={styles.info}>
        <div className={styles.counter}>
          <Button onClick={decrement} icon="minus" secondary small />
          <span className={styles.count}>{amount}</span>
          <Button onClick={increment} icon="plus" secondary small />
        </div>
        <p className={cn(styles.count, styles.price)}>{subtotal} $</p>
        <Button onClick={remove} icon="delete" secondary small />
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  restaurant: restaurantByProductSelector(state, props),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () => dispatch(increment(ownProps.product.id)),
  decrement: () => dispatch(decrement(ownProps.product.id)),
  remove: () => dispatch(remove(ownProps.product.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketItem);
