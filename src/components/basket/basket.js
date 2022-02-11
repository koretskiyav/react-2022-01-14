import { connect } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from './basket.module.css';
import './basket.css';
import itemStyles from './basket-item/basket-item.module.css';
import BasketItem from './basket-item';
import Button from '../button';
import Loader from '../loader/loader';
import { orderProductsSelector, orderSendingSelector, totalSelector } from '../../redux/selectors';

import { UserConsumer } from '../../contexts/user-context';
import { sendOrder } from '../../redux/actions';

function Basket({ title = 'Basket', total, orderProducts, sendOrder, sending, sended }) {
  // const { name } = useContext(userContext);

  const match = useRouteMatch("/checkout");

  if(sending) {
    return (
      <div>      
        <p>Отправка заказа</p>
        <Loader/>
      </div>
    )
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
          <p>{`${total} $`}</p>
        </div>
      </div>
      {match?.isExact ?
          <Button primary block onClick={sendOrder}>
            checkout
          </Button>
        :
        <Link to={"/checkout"}>
          <Button primary block >
            checkout
          </Button>
          </Link>  
      }

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    total: totalSelector(state),
    orderProducts: orderProductsSelector(state),
    sending: orderSendingSelector(state),
    sended: orderSendingSelector(state),
  };
};

const mapDispatchToProps = {
  sendOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);