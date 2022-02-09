import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../contexts/user-context';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './header.module.css';
import {currencyContext} from "../../contexts/currency-context";
import Currency from "../currency";

const Header = () => {
  const { name, setName } = useContext(userContext);
  const { changeCurrency } = useContext(currencyContext);

  return (
    <header className={styles.header}>
        <h2 className={styles.currency} onClick={changeCurrency}>Currency <Currency value={null}/></h2>
      <Link to="/restaurants">
        <Logo />
      </Link>
      <h2 onClick={() => setName('Igor')}>{name}</h2>
    </header>
  );
};

export default Header;
