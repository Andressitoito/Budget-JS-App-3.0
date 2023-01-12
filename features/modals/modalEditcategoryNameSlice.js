import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const modalEditCategoryNameSlice = createSlice({
	name: "modalEditCategoryName",
	initialState: initialState,
	reducers: {
		toggleModalEditCategoryName: (state) => {
			return !state;
		},
	},
});

export const { toggleModalEditCategoryName } =
	modalEditCategoryNameSlice.actions;

export default modalEditCategoryNameSlice.reducer;
