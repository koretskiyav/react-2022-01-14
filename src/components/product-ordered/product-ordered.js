import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './product-ordered.module.css';
import Button from '../button';
import { decrement, increment, remove } from '../../redux/actions';

function ProductOrdered({ product, amount, decrement, increment, remove }) {
  const cost = product.price * amount + '$'

  return (
    <li className={styles.product} >
          <h4>{product.name}</h4>
          <div className={styles.count}>
            {amount}
          </div>
            <Button
              onClick={decrement}
              icon='minus'
            />
            <Button
              onClick={increment}
              icon='plus'
            />
            <Button
              onClick={remove}
              icon='trash'
            />
        <div className={styles.cost}>
          {cost}
        </div>
    </li>
  );
}

ProductOrdered.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  amount: PropTypes.number,
  decrement: PropTypes.func,
  increment: PropTypes.func,
  remove: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  amount: state.order[props.product.id] || 0
});

// const mapDispatchToProps = {
//   decrement,
//   increment,
// };

const mapDispatchToProps = (dispatch, props) => ({
  decrement: () => dispatch(decrement(props.product.id)),
  increment: () => dispatch(increment(props.product.id)),
  remove: () => dispatch(remove(props.product.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductOrdered);