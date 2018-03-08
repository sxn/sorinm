import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";

import App from "component/connected/App";

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({
    getState: PropTypes.func.isRequired,
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};

export default Root;
