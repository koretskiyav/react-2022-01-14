import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from './basket.module.css';
import './basket.css';
import itemStyles from './basket-item/basket-item.module.css';
import BasketItem from './basket-item';
import Button from '../button';
import Loader from '../loader';
import { checkout } from '../../redux/actions';
import {
  orderProductsSelector,
  totalSelector,
  requestSelector,
} from '../../redux/selectors';

import { UserConsumer } from '../../contexts/user-context';

function Basket({ title = 'Basket', total, orderProducts, checkout, request }) {
  // const { name } = useContext(userContext);
  const path = useLocation().pathname;

  if (request) {
    return <Loader />;
  }

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  const handleClick = () => {
    if (path === '/checkout') return checkout;
  };

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
          <p>{`${total} $`}</p>
        </div>
      </div>
      <Link to="/checkout">
        <Button onClick={handleClick()} primary block>
          checkout
        </Button>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    total: totalSelector(state),
    orderProducts: orderProductsSelector(state),
    request: requestSelector(state),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  checkout: () => dispatch(checkout(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
