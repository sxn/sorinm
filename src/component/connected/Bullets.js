import { connect } from "react-redux";

import { getSelectedPage } from "../../reducer";
import * as actions from "../../actions";

import Bullets from "../composed/Bullets";

const mapStateToProps = state => ({
  selectedPage: getSelectedPage(state)
});

export default connect(mapStateToProps, actions)(Bullets);
