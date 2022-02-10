import { connect } from 'react-redux';
import { Route, Link, Switch } from 'react-router-dom';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from './basket.module.css';
import './basket.css';
import itemStyles from './basket-item/basket-item.module.css';
import BasketItem from './basket-item';
import Button from '../button';
import Loader from '../loader';
import {
  orderLoadingSelector,
  orderProductsSelector,
  totalSelector,
} from '../../redux/selectors';
import { checkoutOrder } from '../../redux/actions';

import { UserConsumer } from '../../contexts/user-context';
import { useContext } from 'react';
import { currencyContext } from '../../contexts/currency-context';

function Basket({
  title = 'Basket',
  total,
  orderProducts,
  loading,
  checkoutOrder,
}) {
  const { getAmount } = useContext(currencyContext);

  if (loading) {
    return <Loader />;
  }

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  return (
    <div className={styles.basket}>
      <h4 className={styles.title}>
        <UserConsumer>{({ name }) => `${name}'s ${title}`}</UserConsumer>
      </h4>
      {/* <h4 className={styles.title}>{`${name}'s ${title}`}</h4> */}
      <TransitionGroup>
        {orderProducts.map(({ product, amount, subtotal, restId }) => (
          <CSSTransition
            key={product.id}
            timeout={500}
            classNames="basket-item"
          >
            <BasketItem
              product={product}
              amount={amount}
              subtotal={subtotal}
              restId={restId}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <hr className={styles.hr} />
      <div className={itemStyles.basketItem}>
        <div className={itemStyles.name}>
          <p>Total</p>
        </div>
        <div className={itemStyles.info}>
          <p>{getAmount(total)}</p>
        </div>
      </div>

      <Switch>
        <Route path="/checkout" exact>
          <Button primary block onClick={checkoutOrder}>
            checkout
          </Button>
        </Route>
        <Route path="/">
          <Link to="/checkout">
            <Button primary block>
              checkout
            </Button>
          </Link>
        </Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    total: totalSelector(state),
    orderProducts: orderProductsSelector(state),
    loading: orderLoadingSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkoutOrder: () => dispatch(checkoutOrder()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
