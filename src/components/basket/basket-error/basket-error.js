import { connect } from 'react-redux';
import { orderErrorSelector } from '../../../redux/selectors';
import styles from './basket-error.module.css';

function BasketError({ error }) {
  return (
    <div>
      <h2>Ошибка при заказе</h2>
      <p className={styles.error}>{error}</p>
    </div>
  );
}

export default connect((state) => ({
  error: orderErrorSelector(state),
}))(BasketError);
