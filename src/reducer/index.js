import { combineReducers } from "redux";

import bySlug from "reducer/bySlug";
import allSlugs from "reducer/allSlugs";
import paginator from "reducer/paginator";

export default combineReducers({
  bySlug,
  allSlugs,
  paginator
});
