import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category } from "../../interfaces";

interface CategoryState {
  isLoading: boolean;
  isError: boolean;
  categories: Category[];
}

const initialState: CategoryState = {
  isLoading: false,
  isError: false,
  categories: [],
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<Category[]>) {
      state.categories = action.payload;
    },

    addCategory(state, action: PayloadAction<Category>) {
      state.categories = [];
      state.categories.push(action.payload);
    },

    updateCategory(state, action: PayloadAction<Category>) {
      const index = state.categories.findIndex(
        (category) => category.id === action.payload.id
      );
      if (index !== -1) {
        state.categories[index] = action.payload;
      }
    },

    deleteCategory(state, action: PayloadAction<number>) {
      state.categories = state.categories.filter(
        (category) => category.id !== action.payload
      );
    },
  },
});

export const { setCategories, addCategory, updateCategory, deleteCategory } =
  categorySlice.actions;

export default categorySlice.reducer;
