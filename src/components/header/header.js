import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../contexts/user-context';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './header.module.css';
import CurrencySwitcher from '../currency-switcher';

const Header = () => {
  const { name, setName } = useContext(userContext);

  return (
    <header className={styles.header}>
      <CurrencySwitcher/>
      <Link to="/restaurants">
        <Logo />
      </Link>
      <h2 onClick={() => setName('Igor')}>{name}</h2>
    </header>
  );
};

export default Header;
