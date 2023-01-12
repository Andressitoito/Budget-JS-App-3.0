import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const modalEditBaseAmountSlice = createSlice({
	name: "modalEditBaseAmount",
	initialState: initialState,
	reducers: {
		toggleModalEditBaseAmount: (state) => {
			return !state;
		},
	},
});

export const { toggleModalEditBaseAmount } = modalEditBaseAmountSlice.actions;

export default modalEditBaseAmountSlice.reducer;
