import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { currencyContext } from '../../contexts/currency-context';
import { userContext } from '../../contexts/user-context';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import Select from 'react-select';
import styles from './header.module.css';

const Header = () => {
  const { name, setName } = useContext(userContext);
  const { currencyName, currenciesList, setCurrencyName } =
    useContext(currencyContext);

  return (
    <header className={styles.header} onClick={() => setName('Igor')}>
      <div className={styles.currency}>
        <Select
          value={{ value: currencyName, label: currencyName }}
          options={currenciesList.map(({ name }) => ({
            value: name,
            label: name,
          }))}
          onChange={({ value }) => setCurrencyName(value)}
          isSearchable={false}
        />
      </div>
      {/* <select
        className={styles.currency}
        value={currencyName}
        onChange={(value) => console.log(value)}
      >
        {currenciesList.map(({ name }) => (
          <option key={name}> {name} </option>
        ))}
      </select> */}
      <Link to="/restaurants">
        <Logo />
      </Link>
      <h2 className={styles.user}>{name}</h2>
    </header>
  );
};

export default Header;
