import { connect } from 'react-redux';
import cn from 'classnames';
import './basket.css';
import Button from '../button';
import { decrement, increment } from '../../redux/actions';

function Basket({ menu, order, decrement, increment, log}) {
  const products = [];
  for (const [key] of Object.entries(order)) {
    products.push(...menu.filter(product => product.id === key));
  }
  return (
    <div className={cn('basket')}>
      <h3 className='basket__heading'>Basket</h3>
      <ul className='basket__list'>
        {products.map(product => (
          <li className='basket__item' key={product.id}>
            <div className="basket__title">{product.name}</div>
            <div className="basket__counter">
              <Button
                  onClick={() => decrement(product.id)}
                  data-id="basket-decrement"
                  icon="minus"
                  type="small"
              />
              <div className="basket__ammount" data-id="product-amount">
                {order[product.id]}
              </div>
              <Button
                  onClick={() => increment(product.id)}
                  data-id="basket-increment"
                  icon="plus"
                  type="small"
                />
            </div>
            <div className="basket__price">{product.price}$</div>
          </li>
        ))}
      </ul>
      <div className="basket__total"><b>total:</b> 15.00$</div>
    </div>
  )
}


const mapStateToProps = (state) => ({
  menu: state.restaurants.flatMap(restaurant => restaurant.menu),
  order: state.order,
});

const mapDispatchToProps = (dispatch, props) => ({
  decrement: (id) => dispatch(decrement(id)),
  increment: (id) => dispatch(increment(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
