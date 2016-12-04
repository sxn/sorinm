const bySlug = ( state = {}, action ) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default bySlug;

export const getPage = (state, slug) => state[slug];
