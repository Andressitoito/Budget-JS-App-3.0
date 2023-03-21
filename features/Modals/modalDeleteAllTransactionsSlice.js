import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const modalDeleteAllTransactionsSlice = createSlice({
	name: "modalDeleteAllTransactionsSlice",
	initialState: initialState,
	reducers: {
		toggleModalDeleteAllTransactions: (state) => {
			return !state;
		},
	},
});

export const { toggleModalDeleteAllTransactions } =
	modalDeleteAllTransactionsSlice.actions;

export default modalDeleteAllTransactionsSlice.reducer;
