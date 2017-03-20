import { connect } from "react-redux";

import { getPages } from "../../reducer";

import App from "../composed/App";

const mapStateToProps = state => ({
  pages: getPages(state)
});

export default connect(mapStateToProps)(App);
