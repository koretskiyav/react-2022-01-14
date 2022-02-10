import {CurrencyConsumer} from '../../contexts/currency-context';

const Cost = ({value}) => <CurrencyConsumer>{({convert,}) => convert(value)}</CurrencyConsumer>;

export default Cost;