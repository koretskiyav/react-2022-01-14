import { useMemo } from 'react';
import { connect } from 'react-redux';

import BasketItem from './basketItem';
import { restaurants } from '../../fixtures';

function Basket({ order, sum }) {
  /**
   * Как вариант рестораны можно было запихнуть в стейт
   */
  const allProduct = useMemo(() => {
    return restaurants.reduce((acc, next) => {
      acc.push(next.menu);
      return acc.flat();
    }, []);
  }, []);

  const getProduct = (orderId) => {
    return allProduct.find((x) => x.id === orderId);
  };

  const getSum = () => {
    return Object.keys(order).reduce((acc, next) => {
      return acc + order[next].price;
    }, 0);
  };

  return (
    <>
      <ul>
        {Object.keys(order).map((orderId) => {
          return (
            <li>
              <BasketItem
                orderId={orderId}
                product={getProduct(orderId)}
                key={orderId}
              />
            </li>
          );
        })}
      </ul>

      <span> {getSum()} </span>
    </>
  );
}

const mapStateProps = (state, props) => ({
  order: state.order,
  sum: state.order.price,
});

export default connect(mapStateProps)(Basket);
