import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger, uuidCreator } from './middleware/';

import reducer from './reducer';

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(uuidCreator, logger))
);
