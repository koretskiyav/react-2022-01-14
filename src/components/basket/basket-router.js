import Basket from './basket.js';
import { Route, Switch } from 'react-router-dom';
import BasketError from './basket-error/basket-error.js';

export default () => (
  <Switch>
    <Route
      path="/checkout/success"
      component={() => <h2>Спасибо за заказ!</h2>}
    />
    <Route path="/checkout/failed" component={BasketError} />
    <Route component={Basket} />
  </Switch>
);
