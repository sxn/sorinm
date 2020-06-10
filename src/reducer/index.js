import { combineReducers } from "redux";

import currentPageIndex from "./currentPageIndex";
import pages from "./pages";

export default combineReducers({
  currentPageIndex,
  pages,
});
