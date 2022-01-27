import { ReactComponent as Logo } from '../../icons/logo.svg';
import { ReactComponent as BasketIcon } from '../../icons/basket-icon.svg';

import styles from './header.module.css';

import { connect } from 'react-redux';

import { open_basket } from '../../redux/actions';

const Header = ({open_basket}) => (
  <header className={styles.header}>
    <Logo />
    <BasketIcon
    className={styles.basketIcon}
    onClick={open_basket}
    />
  </header>
);

const mapDispatchToProps = {
  open_basket
};

export default connect(null, mapDispatchToProps)(Header);
