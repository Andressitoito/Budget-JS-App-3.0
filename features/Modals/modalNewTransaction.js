import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const modalNewTransactionSlice = createSlice({
	name: "modalNewTransaction",
	initialState: initialState,
	reducers: {
		toggleModalNewTransaction: (state) => {
			return !state;
		},
	},
});

export const { toggleModalNewTransaction } = modalNewTransactionSlice.actions;

export default modalNewTransactionSlice.reducer;
