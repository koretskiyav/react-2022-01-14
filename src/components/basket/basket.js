import { connect } from 'react-redux';
import { useMemo } from 'react';
import PropTypes from 'prop-types';

import Product from '../product'

function Basket({ allProducts, orderProducts }) {
  
  const emptyBasket = useMemo(
    () => Object.keys(orderProducts).length === 0,
    [orderProducts]
  );

  const orderSumm = useMemo(
    () => {

      return emptyBasket ? 
        0
        : Object.keys(orderProducts)
            .map(orderProductId => 
              orderProducts[orderProductId] * allProducts.find(product=>
                product.id===orderProductId).price
            ).reduce((prev,current) => prev+current)
    },
    [allProducts, orderProducts, emptyBasket]
  );

  return (
    <div>
      <h2>Корзина {emptyBasket ? 'пуста' : ''}</h2>
      <div>Общая сумма заказа: {orderSumm} $</div>
      <div>
        {Object.keys(orderProducts).map((orderProductId) => (
          <Product 
            key={orderProductId} 
            product={allProducts.find(product=>product.id===orderProductId)} 
            showSum
            withRemove />
        ))}
      </div>
    </div>
  );
}

Basket.propTypes = {
  allProducts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  orderProducts: PropTypes.shape({
    amount: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state, props) => ({
  orderProducts: Object.fromEntries(Object.entries(state.order).filter(order => order[1] > 0)),
});

export default connect(mapStateToProps)(Basket);
