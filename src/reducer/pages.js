const pages = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default pages;

export const getPage = (state, slug) => state[slug];
