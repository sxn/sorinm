import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import AppState from "data";
import reducer from "reducer";

const configureStore = () => createStore(reducer, AppState, applyMiddleware([thunk]));
export default configureStore;
