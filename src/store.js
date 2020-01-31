import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import AppState from "data";
import reducer from "reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () =>
  createStore(reducer, AppState, composeEnhancers(applyMiddleware(thunk)));

export default configureStore;
