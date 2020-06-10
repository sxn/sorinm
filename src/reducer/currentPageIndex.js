import { SELECT_PAGE } from "../actions";

const currentPageIndex = (state = 0, action) => {
  switch (action.type) {
    case SELECT_PAGE:
      return action.page;
    default:
      return state;
  }
};

export default currentPageIndex;
