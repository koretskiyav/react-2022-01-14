import { useMemo } from 'react';
import { connect } from 'react-redux';
import Banner from '../banner';

function Basket({ allProducts, selectedProducts }) {
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
      <ul>
        {selectedProducts.map(({ id, name, amount, price }) => (
          <li key={id}>
            <h5>{name}</h5>
            <p>Count: {amount}</p>
            <p>Price: {price}</p>
            <p>Cost: {amount * price}$</p>
          </li>
        ))}
      </ul>
      <h5>Total: {totalCost}$</h5>
    </div>
  );
}

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

export default connect(mapStateToProps)(Basket);
