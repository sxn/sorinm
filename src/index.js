import React from "react";
import { render } from "react-dom";

import "./index.css";
import configureStore from "./store";
import Root from "./component/composed/Root";

if (module.hot) {
  module.hot.accept();
}

render(<Root store={configureStore()} />, document.getElementById("root"));
