import { createContext } from 'react';

export const currencyContext = createContext({
    sign: '$',
    changeCurrency: () => {}
});

export const CurrencyProvider = currencyContext.Provider;
export const CurrencyConsumer = currencyContext.Consumer;
