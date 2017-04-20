import * as fromBySlug from "reducer/bySlug";
import * as fromAllSlugs from "reducer/allSlugs";
import * as fromPaginator from "reducer/paginator";

export const getPages = state => {
  const slugs = fromAllSlugs.getSlugs(state.allSlugs);
  return slugs.map(slug => fromBySlug.getPage(state.bySlug, slug));
};

export const getSelectedPage = state =>
  fromPaginator.getSelectedPage(state.paginator);
