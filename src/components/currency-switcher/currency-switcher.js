import {CurrencyContext,} from '../../contexts/currency-context';
import {useContext,} from 'react';
import Button from '../button';

import styles from './currency-switcher.module.css'

const CurrencySwitcher = () => {
    const {
        currencies,
        setActive: setActiveCurrency,
        active:    activeCurrency,
    } = useContext(CurrencyContext);

    return <div className={styles.currencies}>
        {
            currencies.map(currency => <Button
                key={currency.id}
                classNames={[
                    styles.currencyControl,
                    currency.id === activeCurrency ? styles.currencyControlActive : ''
                ]}
                transparent
                onClick={() => setActiveCurrency(currency)}>
                {currency.label}
            </Button>)
        }
    </div>;
};

export default CurrencySwitcher;