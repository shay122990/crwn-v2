import { createSelector } from "reselect";

//  memoir selectors which are very intelligent in being able to determine, hey, if nothing's
// changed, just don't even bother re rendering.

const selectCategoryReducer = (state) => {
  console.log("selector 1 fired");
  return state.categories;
};

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    console.log("selector 2 fired");
    return categoriesSlice.categories;
  }
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    console.log("selector 3 fired");
    //   as long as the categories array does not change,
    // do not rerun this method, just give back the prev calculated value
    return categories.reduce((accumilator, category) => {
      const { title, items } = category;
      accumilator[title.toLowerCase()] = items;
      return accumilator;
    }, {});
  }
);

//category is the data
