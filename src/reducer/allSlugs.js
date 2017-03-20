const allSlugs = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default allSlugs;

export const getSlugs = state => state;

export const getLatestSlug = state => state[state.length - 1];
