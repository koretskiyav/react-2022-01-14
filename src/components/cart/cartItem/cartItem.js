import Button from '../../button';

import styles from './cartItem.module.css';
import PropTypes from 'prop-types';

const CartItem = ({product: {id, name, price, ingredients, amount}, increment, decrement, remove}) => (
    <div className={styles.item}>
        <div className={styles.header}>
            <Button onClick={() => remove(id)} icon="trash"/>
            <div className={styles.productInfo}>
                <h3 className={styles.heading}>{name}</h3>
                <p className={styles.description}>{(ingredients || []).join(', ')}</p>
            </div>
            <p className={styles.cost}>{price * amount} $</p>
        </div>

        <div className={styles.footer}>
            <Button onClick={() => decrement(id)} icon="minus"/>
            <p className={styles.amount}>{amount}</p>
            <Button onClick={() => increment(id)} icon="plus"/>
        </div>
    </div>
);

CartItem.propTypes = {
    product: PropTypes.shape({
        id:          PropTypes.string.isRequired,
        name:        PropTypes.string.isRequired,
        price:       PropTypes.number.isRequired,
        ingredients: PropTypes.array,
        amount:      PropTypes.number.isRequired,
    }).isRequired,

    decrement: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired,
    remove:    PropTypes.func.isRequired,
};

export default CartItem;