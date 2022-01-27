import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import styles from './basketItem.module.css';
import Button from '../button';
import { decrement, increment, remove } from '../../redux/actions';

function BasketItem({ amount, name, price, ingredients, decrement, increment, remove }) {

  return (
    <div className={styles.product}>

      <p>{name} <span>({ingredients.join(', ')})</span></p>

      <div className={styles.content}>{price} $</div>

      <div>x</div>

      <div className={styles.buttons}>
        <Button
          onClick={decrement}
          data-id="product-decrement"
          icon="minus"
        />
        <div className={styles.content}>{amount}</div>
        <Button
          onClick={increment}
          data-id="product-increment"
          icon="plus"
        />
      </div>

      <div className={styles.content}>{amount * price} $</div>

      <button className={styles.remove} onClick={remove}>&#10060;</button>

    </div>
  );
}

const mapDispatchToProps = (dispatch, {id}) => ({
  decrement: () => dispatch(decrement(id)),
  increment: () => dispatch(increment({id:[id]})),
  remove: () => dispatch(remove(id))
});

export default connect(null, mapDispatchToProps)(BasketItem);