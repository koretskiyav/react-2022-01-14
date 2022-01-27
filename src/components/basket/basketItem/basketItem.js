import Button from '../../button';
import PropTypes from 'prop-types';

function BasketItem({ name, price, amount, increment, decrement, drop }) {
  return (
    <div>
      <h5>{name}</h5>
      <p>Count: {amount}</p>
      <p>Cost: {amount * price}$</p>
      <div style={{ display: 'flex' }}>
        <Button onClick={decrement} icon="minus" />
        <Button onClick={increment} icon="plus" />
        <Button onClick={drop} icon="cross" />
      </div>
    </div>
  );
}

BasketItem.propTypes = {
  amount: PropTypes.number.isRequired,
  name: PropTypes.string,
  price: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  drop: PropTypes.func.isRequired,
};

export default BasketItem;
