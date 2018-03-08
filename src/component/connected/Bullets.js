import { connect } from "react-redux";

import { getSelectedPage } from "selectors";
import { selectPage } from "actions";
import Bullets from "component/composed/Bullets";

export default connect(
  state => ({
    selectedPage: getSelectedPage(state),
  }),
  { selectPage },
)(Bullets);
