import {createContext, useState} from 'react';

const ID_USD = 'usd';
const ID_EUR = 'eur';
const ID_GBP = 'gbp';
const ID_RUB = 'rub';

const LABEL_USD = '$';
const LABEL_EUR = '€';
const LABEL_GBP = '£';
const LABEL_RUB = '₽';

const RATE_USD = 1;
const RATE_EUR = 1.15;
const RATE_GBP = 1.36;
const RATE_RUB = .013;

const DEFAULT_CURRENCY = ID_USD;
const DEFAULT_LABEL = LABEL_USD;
const DEFAULT_RATE = RATE_USD;

const currencies = [
    {id: ID_USD, label: LABEL_USD, rate: RATE_USD,},
    {id: ID_EUR, label: LABEL_EUR, rate: RATE_EUR,},
    {id: ID_GBP, label: LABEL_GBP, rate: RATE_GBP,},
    {id: ID_RUB, label: LABEL_RUB, rate: RATE_RUB,},
];

const getCurrencyDescriptorById = currencyId => currencies.find(({id,}) => currencyId === id);

const setActive = updateCallback => currency => {
    if (!getCurrencyDescriptorById(currency.id) || currency.id === currencies.active) {
        return;
    }

    updateCallback(currency.id);
}

const convert = activeState => value => {
    const currencyDescriptor = getCurrencyDescriptorById(activeState);
    const rate = currencyDescriptor?.rate || DEFAULT_RATE;
    const label = currencyDescriptor?.label || DEFAULT_LABEL;

    return `${Math.round(value / rate)} ${label}`;
}

export const CurrencyContext = createContext();
export const CurrencyProvider = ({children}) => {
    const [active, update] = useState(ID_USD);

    return <CurrencyContext.Provider value={
        {
            currencies,
            active,
            setActive: setActive(update),
            convert:   convert(active)
        }
    }>
        {children}
    </CurrencyContext.Provider>;
};
export const CurrencyConsumer = CurrencyContext.Consumer;
