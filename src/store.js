import { createStore } from "redux";

import AppState from "./data";
import reducer from "./reducer";

const configureStore = () => createStore(reducer, AppState);

export default configureStore;
