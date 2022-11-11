import { createSlice } from "@reduxjs/toolkit";

const allItems = JSON.parse(sessionStorage.getItem("categories"));

export const categorySlice = createSlice({
  name: "categories",
  initialState: {
    value: allItems ?? [
      { name: "Books", id: 1, lists: ["Story book", "Text book"] },
    ],
  },
  reducers: {
    addCategory: (state, action) => {
      //Add a new category
      state.value.push(action.payload);
      sessionStorage.setItem("categories", JSON.stringify(state.value));
    },
    deleteCategory: (state, action) => {
      //delete a category
      state.value = state.value.filter((item) => item.id !== action.payload.id);
      sessionStorage.setItem("categories", JSON.stringify(state.value));
    },
    updateCategory: (state, action) => {
      state.value = state.value.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            name: action.payload.name,
          };
        }
        return item;
      });
      sessionStorage.setItem("categories", JSON.stringify(state.value));
    },
    addCategoryItem: (state, action) => {
      //Add new item to a category
      state.value = state.value.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            lists: [...item.lists, action.payload.pick],
          };
        }
        return item;
      });
      sessionStorage.setItem("categories", JSON.stringify(state.value));
    },

    deleteCategoryItem: (state, action) => {
      state.value = state.value.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            lists: item.lists.filter((item) => item !== action.payload.name),
          };
        }
        return item;
      });
      sessionStorage.setItem("categories", JSON.stringify(state.value));
    },
    updateCategoryItem: (state, action) => {
      //Update Category Item
      state.value = state.value.map((item) => {
        if (item.id === action.payload.id) {
          const singleItem = item.lists.indexOf(action.payload.name);
          item.lists[singleItem] = action.payload.newItem;

          return {
            ...item,
          };
        }
        return item;
      });
      sessionStorage.setItem("categories", JSON.stringify(state.value));
    },
  },
});

export const {
  addCategory,
  deleteCategory,
  updateCategory,
  addCategoryItem,
  deleteCategoryItem,
  updateCategoryItem,
} = categorySlice.actions;

export default categorySlice.reducer;
