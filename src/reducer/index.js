import { combineReducers } from "redux";

import pages from "reducer/pages";
import currentPage from "reducer/currentPage";

export default combineReducers({
  pages,
  currentPage,
});
