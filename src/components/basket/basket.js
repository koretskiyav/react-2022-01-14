import { useMemo } from 'react';
import { connect } from 'react-redux';
import { decrement, increment, drop } from '../../redux/actions';
import BasketItem from './basketItem';
import Banner from '../banner';
import styles from './basket.module.css';
import PropTypes from 'prop-types';

function Basket({ allProducts, selectedProducts, increment, decrement, drop }) {
  const totalCost = useMemo(
    () =>
      selectedProducts.reduce(
        (cost, { amount, price }) => cost + amount * price,
        0
      ),
    [selectedProducts]
  );

  return (
    <div>
      <Banner heading="Basket" />
      <div className={styles.basket}>
        <ul>
          {selectedProducts.map(({ id, name, amount, price }) => (
            <li key={id}>
              <BasketItem
                name={name}
                amount={amount}
                price={price}
                increment={() => increment(id)}
                decrement={() => decrement(id)}
                drop={() => drop(id)}
              />
            </li>
          ))}
        </ul>
        <h5>Total: {totalCost}$</h5>
      </div>
    </div>
  );
}

Basket.propTypes = {
  allProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ),
  selectedProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      name: PropTypes.string,
      price: PropTypes.number.isRequired,
    })
  ),
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  drop: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => {
  const selectedProductsIds = Object.entries(state.order)
    .map(([id, amount]) => ({
      id,
      amount,
    }))
    .filter(({ amount }) => amount > 0);

  return {
    /** get products info by IDs */
    selectedProducts: selectedProductsIds.map(({ id, amount }) => ({
      amount,
      ...props.allProducts.find((p) => id === p.id),
    })),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  decrement: (id) => dispatch(decrement(id)),
  increment: (id) => dispatch(increment(id)),
  drop: (id) => dispatch(drop(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
