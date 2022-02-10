import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';
import currenciesList from '../../currencies.json';
import { UserProvider } from '../../contexts/user-context';
import { CurrencyProviderComponent } from '../../contexts/currency-context';

const App = () => {
  const [name, setName] = useState('Andrey');
  return (
    <div>
      <CurrencyProviderComponent currenciesList={currenciesList}>
        <UserProvider value={{ name, setName }}>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/restaurants" />
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={Restaurants} />
            <Route path="/error" component={() => <h2>Error Page</h2>} />
            <Route
              path="/"
              component={() => <h2>404 - Not Found Page :(</h2>}
            />
          </Switch>
        </UserProvider>
      </CurrencyProviderComponent>
    </div>
  );
};

export default App;
