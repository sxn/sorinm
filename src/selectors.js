export const getPages = state => state.pages;

export const getCurrentPageIndex = state => state.currentPageIndex;

export const getCurrentPage = state => state.pages[state.currentPageIndex] || null;
