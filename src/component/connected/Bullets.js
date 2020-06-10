import { connect } from "react-redux";

import { getCurrentPageIndex, getCurrentPage } from "../../selectors";
import { selectPage } from "../../actions";
import Bullets from "../composed/Bullets";

export default connect(
  (state) => ({
    currentPage: getCurrentPage(state),
    currentPageIndex: getCurrentPageIndex(state),
  }),
  { selectPage },
)(Bullets);
