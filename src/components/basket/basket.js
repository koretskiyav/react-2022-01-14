import { connect } from 'react-redux';
import PropTypes, { object, shape } from 'prop-types';

import styles from './basket.module.css';
import ProductOrdered from '../product-ordered/product-ordered';
import { hide } from '../../redux/actions';

function Basket({ products, totalCost, showBasket, hide }) {
  const basket = `${styles.basket} ${showBasket ?  styles['basket-shown'] : styles['basket-hidden']}`
  const totalCostText = `Ordered products to ${totalCost}$`
  const productList = products.map(product => <ProductOrdered product={product} key={product.id} /> )

  return (
    <div className={basket}>
      <div className={styles['basket-content']}>
        <span className={styles['basket-close']} onClick={hide}>X</span>
        <h2>{totalCostText}</h2>
        <ul>
          {productList}
        </ul>
      </div>
    </div>
  )
}

Basket.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.object,
    })
  ).isRequired,
  showBasket: PropTypes.bool.isRequired,
  totalCost: PropTypes.number.isRequired,
}

const mapStateToProps = (state, props) => {
  const productIds = Object.keys(state.order);
  const allMenus = props.restaurants.map(restaurant => restaurant.menu);
  const reducer = (prev, cur) => [...prev, ...cur];
  const wholeMenu = allMenus.reduce(reducer, [])
  let products = wholeMenu.filter(item => productIds.includes(item.id))

  let totalCost = Object.entries(state.order).reduce(
    (prev, cur) => prev + products.find(product => product.id === cur[0]).price * cur[1], 0
  )
  let showBasket = state.basket.showBasket
  return { products, totalCost, showBasket }
};


const mapDispatchToProps = {hide}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);

