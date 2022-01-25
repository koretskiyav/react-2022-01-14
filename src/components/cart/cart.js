import {useMemo} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {decrement, increment, remove} from '../../redux/actions';

import CartItem from './cartItem';

import styles from './cart.module.css';

const Cart = ({products, order, decrement, increment, remove}) => {
    const {productsInCart, total,} = useMemo(
        () => {
            const productsInCart = Object.entries(order)
                .map(([productId, amount,]) => ({
                    ...products[productId],
                    amount,
                }))
                .filter(product => product && product.amount);
            const total = productsInCart.reduce((acc, {price, amount,}) => acc + price * amount, 0);

            return {productsInCart, total,};
        },
        [products, order]
    );

    if (!productsInCart.length) {
        return '';
    }

    return (
        <section className={styles.cart}>
            <h2 className={styles.heading}>Cart</h2>
            {
                productsInCart.map((product) => (
                    <CartItem key={product.id}
                              product={product}
                              increment={increment}
                              decrement={decrement}
                              remove={remove}/>
                ))
            }
            <div className={styles.summary}>
                <p className={styles.summaryTitle}>Total:</p>
                <p className={styles.summaryTotal}>{total} $</p>
            </div>
        </section>
    );
};

Cart.propTypes = {
    products: PropTypes.objectOf(function (propValue, key, componentName, location, propFullName) {
        if (typeof key !== 'string') {
            return new Error(`[Component:'${componentName}'] each key of products prop entry must be a string`);
        }

        if (typeof propValue[key] !== 'object') {
            return new Error(`[Component:'${componentName}'] each entry in products prop must be an object`);
        }

        if (!propValue[key].id || typeof propValue[key].id !== 'string') {
            return new Error(
                `[Component:'${componentName}'] each entry in products prop
                must have a key "id" with according string value`);
        }

        if (!propValue[key].price || typeof propValue[key].price !== 'number') {
            return new Error(
                `[Component:'${componentName}'] each entry in products prop
                must have a key "price" with according number value`);
        }
    }),
    order:    PropTypes.objectOf(function (propValue, key, componentName, location, propFullName) {
        if (typeof key !== 'string') {
            return new Error(`[Component:'${componentName}'] each key of order prop entry must be a string`);
        }

        if (typeof propValue[key] !== 'number') {
            return new Error(`[Component:'${componentName}'] each value of order prop entry must be a number`);
        }
    }),

    decrement: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired,
    remove:    PropTypes.func.isRequired,
};

const mapStateToProps = ({order}) => ({
    order,
});

const mapDispatchToProps = {
    decrement,
    increment,
    remove,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);