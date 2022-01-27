import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../icons/logo.svg';
import { ReactComponent as BasketIcon } from '../../icons/basket.svg';
import styles from './header.module.css';
import { show } from '../../redux/actions';

const Header = ({showBasket}) => (
  <header className={styles.header}>
    <Logo />
    <BasketIcon className={styles.basket} onClick={showBasket}/>
  </header>
);

const mapDispatchToProps = { showBasket: show }
const _ = null

export default connect(_, mapDispatchToProps)(Header); //eslint-disable-line
