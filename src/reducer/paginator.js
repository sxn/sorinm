import { SELECT_PAGE } from "actions";

const paginator = (state = 0, action) => {
  switch (action.type) {
    case SELECT_PAGE:
      return action.page;
    default:
      return state;
  }
};

export default paginator;

export const getSelectedPage = state => state;
