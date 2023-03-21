import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const modalAddNewCategorySlice = createSlice({
	name: "modalAddNewCategory",
	initialState: initialState,
	reducers: {
		toggleModalAddNewCategory: (state) => {
			return !state;
		},
	},
});

export const { toggleModalAddNewCategory } = modalAddNewCategorySlice.actions;

export default modalAddNewCategorySlice.reducer;
