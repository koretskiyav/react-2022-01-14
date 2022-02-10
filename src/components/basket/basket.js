import { connect } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from './basket.module.css';
import './basket.css';
import itemStyles from './basket-item/basket-item.module.css';
import BasketItem from './basket-item';
import Button from '../button';
import { orderProcessingSelector, orderProductsSelector, totalSelector } from '../../redux/selectors';
import { createOrder } from '../../redux/actions';

import { UserConsumer } from '../../contexts/user-context';
import Loader from '../loader';
import cn from 'classnames';
import Cost from '../cost/cost';

function Basket({ title = 'Basket', total, orderProducts, createOrder, isProcessing }) {
  // const { name } = useContext(userContext);

  const match = useRouteMatch('/checkout');

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  return (
    <div className={cn(styles.basket, isProcessing && styles.basketProcessing)}>
      <h4 className={styles.title}>
        <UserConsumer>{({ name }) => `${name}'s ${title}`}</UserConsumer>
      </h4>
      {/* <h4 className={styles.title}>{`${name}'s ${title}`}</h4> */}
      <div className={styles.basketItems}>
        <TransitionGroup component={null}>
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
        {isProcessing && <Loader className={styles.basketLoader}/>}
      </div>
      <hr className={styles.hr} />
      <div className={itemStyles.basketItem}>
        <div className={itemStyles.name}>
          <p>Total</p>
        </div>
        <div className={itemStyles.info}>
          <p><Cost value={total}/></p>
        </div>
      </div>
      {
        match?.isExact
          ? <Button primary block disabled={isProcessing} onClick={createOrder}>
                checkout
            </Button>
          : <Link to="/checkout">
                <Button primary block>
                    checkout
                </Button>
            </Link>
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isProcessing: orderProcessingSelector(state),
    total: totalSelector(state),
    orderProducts: orderProductsSelector(state),
  };
};

const mapDispatchToProps = {
    createOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
