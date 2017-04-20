import { combineReducers } from "redux";
import bySlug, * as fromBySlug from "reducer/bySlug";
import allSlugs, * as fromAllSlugs from "reducer/allSlugs";
import paginator, * as fromPaginator from "reducer/paginator";

const reducer = combineReducers({
  bySlug,
  allSlugs,
  paginator
});

export default reducer;

export const getPages = state => {
  const slugs = fromAllSlugs.getSlugs(state.allSlugs);
  return slugs.map(slug => fromBySlug.getPage(state.bySlug, slug));
};

export const getSelectedPage = state =>
  fromPaginator.getSelectedPage(state.paginator);
