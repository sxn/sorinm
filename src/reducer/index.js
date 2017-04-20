import { combineReducers } from "redux";
import bySlug, * as fromBySlug from "./bySlug";
import allSlugs, * as fromAllSlugs from "./allSlugs";
import paginator, * as fromPaginator from "./paginator";

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
