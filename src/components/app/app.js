import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';
import { UserProvider } from '../../contexts/user-context';
import { CurrencyProvider } from '../../contexts/currency-context';
import Message from "../message";
import useCurrency from "../../hooks/use-currnecy";

const App = () => {
  const [name, setName] = useState('Andrey');
  const {sign, changeCurrency} = useCurrency('$');

  return (
    <div>
      <UserProvider value={{ name, setName }}>
        <CurrencyProvider value={{sign, changeCurrency}}>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/restaurants" />
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={Restaurants} />
            <Route path="/message" component={Message} />
            <Route path="/error" component={() => <h2>Error Page</h2>} />
            <Route path="/" component={() => <h2>404 - Not Found Page :(</h2>} />
          </Switch>
        </CurrencyProvider>
      </UserProvider>
    </div>
  );
};

export default App;
