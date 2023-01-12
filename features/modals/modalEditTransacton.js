import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const modalEditTransactionSlice = createSlice({
	name: "modalEditTransaction",
	initialState: initialState,
	reducers: {
		toggleModalEditTransaction: (state) => {
			return !state;
		},
	},
});

export const { toggleModalEditTransaction } = modalEditTransactionSlice.actions;

export default modalEditTransactionSlice.reducer;
