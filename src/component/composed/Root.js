import React, { PropTypes } from "react";
import { Provider } from "react-redux";

import App from "../connected/App";

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({
    getState: PropTypes.func.isRequired,
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
  }).isRequired
};

export default Root;
