import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	categoryData: null,
	categoryList: null,
	currentCategory: null,
};

const categoryDataSlice = createSlice({
	name: "categoryData",
	initialState: initialState,
	reducers: {
		setCategoryData: (state, action) => {
			state.categoryData = action.payload;
		},
		updateCategoryListState: (state, action) => {
			state.categoryList = action.payload;
		},
		setCurrentCategory: (state, action) => {
			state.currentCategory = action.payload;
		},
	},
});

export const { setCategoryData, updateCategoryListState, setCurrentCategory } = categoryDataSlice.actions;

export default categoryDataSlice.reducer;
