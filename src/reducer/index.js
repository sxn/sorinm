import { combineReducers } from "redux";

import pages from "reducer/pages";
import currentPageIndex from "reducer/currentPageIndex";

export default combineReducers({
  pages,
  currentPageIndex,
});
