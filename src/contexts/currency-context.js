import { createContext } from 'react';
import {DOLLAR} from "../redux/constants";

export const currencyContext = createContext({
    sign: DOLLAR,
    changeCurrency: () => {}
});

export const CurrencyProvider = currencyContext.Provider;
export const CurrencyConsumer = currencyContext.Consumer;
