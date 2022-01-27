import { useMemo } from 'react';
import {connect} from 'react-redux';
import BasketItem from '../basketItem/basketItem.component';
import style from './basket.module.css';

const Basket = ({order}) => {
  const items = useMemo(() => Object.entries(order), [order]);
  const total = useMemo(()=> items.reduce((total, [, {price, amount}]) => total + price * amount, 0), [items]);

  return (
    <div className={style.basket}>
      {
        items.length
        ? items.map(([id, props]) => <BasketItem key={id} {...props} id={id}/>)
        : <div className={style.empty}>cart is empty</div>
      }

      {!!items.length && <div className={style.total}>Total: {total} $</div>}

    </div>
  );
};

export default connect(({order}) => ({order}))(Basket);