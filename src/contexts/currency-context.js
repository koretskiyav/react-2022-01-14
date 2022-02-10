import { createContext, useState } from 'react';

export const currencyContext = createContext({});

const CurrencyProvider = currencyContext.Provider;

export const CurrencyProviderComponent = (props) => {
  const { currenciesList } = props;
  const [currencyName, setCurrencyName] = useState('RUB');
  const getAmount = (usdCost) => {
    const currency = currenciesList.find(({ name }) => name === currencyName);
    return currency
      ? `${(currency.rate * usdCost).toFixed(2)} ${currency.sign}`
      : '---';
  };

  return (
    <CurrencyProvider
      value={{ currencyName, setCurrencyName, currenciesList, getAmount }}
    >
      {props.children}
    </CurrencyProvider>
  );
};
