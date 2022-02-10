import {orderErrorSelector} from '../../redux/selectors';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import cn from 'classnames'
import Button from '../button';
import styles from './checkout-status.module.css';

const CheckoutStatus = ({error,}) => error
    ? <div className={styles.checkoutLayout}>
        <h2 className={cn(styles.checkoutMessage, styles.checkoutError)}>
            {typeof error === 'string' ? error : 'Не удалось сохранить заказ'}
        </h2>
        <p>
            <Link to="/checkout" className={styles.checkoutLink}><Button primary block>К заказу</Button></Link>
            <Link to="/restaurants" className={styles.checkoutLink}><Button primary block>К ресторанам</Button></Link>
        </p>
    </div>
    : <div className={styles.checkoutLayout}>
        <h2 className={styles.checkoutMessage}>Спасибо за заказ!</h2>
        <p>
            <Link className={styles.checkoutLink} to="/restaurants"><Button primary block>К ресторанам</Button></Link>
        </p>
    </div>;

export default connect(state => ({
    error: orderErrorSelector(state),
}))(CheckoutStatus);