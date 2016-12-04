import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import AppState from '../data';
import reducer from '../reducer';

const configureStore = () =>{
  const middlewares = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  const store = createStore(
    reducer,
    AppState,
    applyMiddleware(...middlewares)
  );

  return store;
};

export default configureStore;
