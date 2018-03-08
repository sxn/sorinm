import { connect } from "react-redux";

import { getPages } from "selectors";
import App from "component/composed/App";

export default connect(state => ({
  pages: getPages(state),
}))(App);
